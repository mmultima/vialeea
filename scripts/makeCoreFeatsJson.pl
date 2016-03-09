open(FEATS, '<', 'coreFeats.src') or die("Couldn't open!");

$defaultType = "General";
$printed = 0;
print("var featData = \n[\n");

while(<FEATS>) {
	if (/^Metamagic Feats/) {
		$defaultType="Metamagic";
		#continue;
	}
	else { 
	if (/^Item Creation Feats/) {
		$defaultType="Item Creation";
		#continue;
	}
	else {
		#$line = $_;
		#print;
		s/^\s*//;
		$line = $_;
		@array = split /\t/;
		$type = $defaultType;

		@prereqFeats = ();
		@prereqStats = ();
		@prereqAbilities = ();

		$bab=(-1);
		if ($array[0]=~/\*$/) {
			$type = Combat;
			$array[0]=~s/\*$//;
		}
		if ($array[2]=~/Whenever you score a critical/) {
			$type = $type . " " . "Critical";
		}

		if ($array[1]=~/^-$/) {
			#No prereqs
		}
		else {
			if ($array[1]=~/(Armor Proficiency, \w+)/) {
				push(@prereqFeats, $1);
				$array[1]=~s/$1,?\s*//;
			}	
			@featList = split(/,/, $array[1]);
			foreach $feat (@featList) {
				$isFeat = 1;
				if ($feat=~/[b|B]ase attack bonus \+(\d+)/) {
					$bab=$1+0;
					$isFeat = 0;
				}
				if ($feat=~/(Str|Dex|Con|Int|Wis|Cha) (\d\d)/) {
					push(@prereqStats, "$1 $2");
					$isFeat = 0;	
				}	
				#if ($feat=~/((c|C)hannel (positive |negative |)energy class feature)/) {
					#print "1: $1 2: $2 3: $3 4: $4 5: $5";
				#	push(@prereqAbilities, $1);
				#	$isFeat = 0;	
				#}
				if ($feat=~/((c|C)aster level \d\d?\w\w)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/((a|A)bility to cast (arcane|divine) spells)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/(.*class feature)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/(\d?\d\w\w-level \w+)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/((a|A)ny two critical feats)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/((C|c)haracter level \d+\w\w)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			

				if ($feat=~/(\d+ ranks .*)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}
				if ($feat=~/(Ability to acquire a familiar)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/^\s*see feat\s*$/) {
					$isFeat = 0;
				}			
				if ($feat=~/((P|p)roficiency with weapon)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/(\w+ \d+ ranks?)/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			
				if ($feat=~/(Weapon proficiency \(\w+\))/) {
					push(@prereqAbilities, $1);
					$isFeat = 0;
				}			

				if ($isFeat==1) {
					push(@prereqFeats, $feat);
				}
			}
		}

		$featString = join('#', @prereqFeats);
		$prereq = '';
		if ($bab != (-1)) {
			$prereq = "bab: +$bab";
		}

		if ((0+@prereqStats)>0) {
			$prereq = $prereq . " " . join(' ', @prereqStats);
		}
		if ((0+@prereqAbilities)>0) {
			$prereq = $prereq . " " . join(' ', @prereqAbilities);
		}
	
		if ($line=~/\w+/) {	
			#print "name: $array[0], type: $type, prereq: $prereq, feats: $featString\n";
			if ($printed) {
				print ",\n";
			}
			$printed = 1;	
			@types = split(/ /, $type);
			foreach $oneType (@types) {
				$oneType=~s/^(.*)$/"\1"/;
			}
			$typeText = "\t\"types\": [\n\t\t" . join(",\n\t\t", @types) . "\n\t]"; 

			print qq#{\n\t"name": "$array[0]", \n$typeText#;

			$notFirst = 0;
			$featText = "\n\t\t\"feats\": [";
			$atAll = 0;
			foreach $feat (@prereqFeats) {
				$realFeat = $feat;
				$subType = "";
				if ($feat=~/\w+/) {
					$atAll = 1;
				}
				if ($notFirst) {
					$featText.=",";
				}
				if ($feat=~/(.*\w)\s+\(([^)]*)\)/) {
					$realFeat = $1;
					$subType = $2;
					#print "\n###$feat $1\n";
				}
				$realFeat=~s/^\s+//;
				$featText.=qq#\n\t\t\t{\n\t\t\t\t"name": "$realFeat"#;
				if ($subType) {
					$featText.=qq#,\n\t\t\t\t"subtype": "$subType"#;
				}
				$featText.="\n\t\t\t}";
				$notFirst=1;
			}
			$featText .= "\n\t\t]";
			if (!$atAll) {
				$featText = "";
			}

			if ($bab != -1) {
				if ($atAll) {
					$featText.= ",";	
				}
				$featText .= "\n\t\t\"bab\": $bab";
			}

			print qq#,\n\t"prereq": {$featText\n\t}#;

			print "\n}";
		}
	}
	}
}
print ("\n]\n;\n");

