open (FILE, '<', 'traits.src') or die("Could not open!");

@types = ('Combat', 'Faith', 'Magic', 'Social');
$type = -1;

#print @types;
#print "\n";

$description = "";
$name="";

print "var traits = [\n";
$printed = 0;
while (<FILE>) {

    if (/(\d+) (.*):\s+(.*)$/) {
        if ($1 == '1') {
            #print "$types[$type]\n";
            if ($description ne " Combat traits") {
                if (!$printed) {
                    #print "\n###$description\n";
                    print qq#    "description": "$prevdesc"\n  },\n#;
                }
            }
            $type++;
            $name="";
        }
        if ($name) {
            print qq#    "description": "$description"\n  },\n#;
            $printed = 1;
            $description = "";
        }
        print qq#  {\n    "name": "$2",\n#;
        print qq#    "type": "Basic",\n#;
        print qq#    "subtype": "$types[$type]",\n#;
        $name=$2;
        $description = $3;
        $printed=0;
        #print "  $2\n";
    }
    else {
        s/(\S)\s+$/\1/;
        $prevdesc = $description; 
        $description .=" $_";
    }
}

$description =~ s/(\S)\s+$/\1/;
print qq#    "description": "$description"\n  },\n#;

#print "\nFaction traits\n\n";

open (FILE, '<', 'traits.guide.src') or die("Could not open!");
#WTF is the character in Liberty?
@factions = ('Dark Archive', 'The Exchange', 'Grand Lodge', "Liberty’s Edge", 'Scarab Sages', 'Silver Crusade', 'Sovereign Court');
$faction = 0;
$printFaction = "";
$name = "";
while (<FILE>) {
    $factLine = 0;
    foreach $f (@factions) {
        if (/^$f/) {
            #if ($name ne "") {
            #    print qq#    {\n        name: "$name",\n        type: "Faction",\n        faction: "$faction",\n        description: "$description"\n    },\n#;
            #}
            #print "$description\n";
            #print "$f\n";
            $faction = $f;
            if ($printFaction eq "") {
                $printFaction = $faction;
            }
            $factLine=1;
        }
    }
    if (!$factLine) {
        if (/([A-Z].*): (.*)/) {
            #print "$description\n";
            if ($name ne "") {
                print qq#    {\n        name: "$name",\n        type: "Faction",\n        subtype: "$printFaction",\n        description: "$description"\n    },\n#;
            }
            #print "$description\n";
            #print "  $1\n";
            $printFaction = $faction;
            $name = $1;
            $description=$2;
        }
        else {
            chomp;
            $description.=" $_";
        }
    }
}

#print "$description\n";
if ($name ne "") {
    print qq#    {\n        name: "$name",\n        type: "Faction",\n        subtype: "$faction",\n        description: "$description"\n    }\n#;
}
print "];\n";
#print "$description\n";
