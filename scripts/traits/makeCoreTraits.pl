open (FILE, '<', 'traits.src') or die("Could not open!");

@types = ('Combat', 'Faith', 'Magic', 'Social');
$type = -1;

#print @types;
#print "\n";

$description = "";
$name="";

print "[\n";
$printed = 0;
while (<FILE>) {

    if (/(\d+) (.*):\s+(.*)$/) {
        if ($1 == '1') {
            #print "$types[$type]\n";
            if (!$printed) {
                print qq#    "description": "$prevdesc"\n  }\n#;
            }
            $type++;
            $name="";
        }
        if ($name) {
            print qq#    "description": "$description"\n  }\n#;
            $printed = 1;
            $description = "";
        }
        print qq#  {\n    "name": "$2",\n#;
        print qq#    "type": "$types[$type]",\n#;
        $name=$2;
        $description = $3;
        $printed=0;
        #print "  $2\n";
    }
    else {
        s/\S\s+$/ /;
        $prevdesc = $description; 
        $description .=$_;
    }
}

$description =~ s/\S\s+$//;
print qq#    "description": "$description"\n  }\n#;

print "\nFaction traits\n\n";

open (FILE, '<', 'traits.guide.src') or die("Could not open!");
#WTF is the character in Liberty?
@factions = ('Dark Archive', 'The Exchange', 'Grand Lodge', "Liberty’s Edge", 'Scarab Sages', 'Silver Crusade', 'Sovereign Court');
$faction = 0;
while (<FILE>) {
    foreach $f (@factions) {
        if (/^$f/) {
            print "$f\n";
        }
    }

    if (/(.*):/) {
        print "  $1\n";
    }
}
