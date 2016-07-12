var util = {
    bab: function(char, classes) {
        var bab=0;
        for (var i = 0; i < classes.length; i++) {
            var myClass = classes[i];
            var level = char.classes[myClass.name];
            if (level) {
                bab += Math.floor(level * (myClass.BAB === 'full'?1:myClass.BAB==='medium'?0.75:0.5));
            }
        }
        return bab;
    },
    save: function(myClass, save, level) {
        if (level === 0) {
            return 0;
        }
        return (myClass.Saves[save]==='Good'? 
            2+Math.floor(level/2):
            Math.floor(level/3));
    },
    totalSave: function(save, char, classes) {
        var value = 0;
        for (var classIndex = 0; classIndex < classes.length; classIndex++) {
            var level = char.classes[classes[classIndex].name]||0;
            if (level) {
                value += util.save(classes[classIndex], save, level);
            }
        }

        var stat = 'Fort'===save?'con':'Ref'===save?'dex':'wis';
        value += util.statBonus(char.totalstat[stat]);
        return value; 
    },
    statBonus: function(stat) {
        return (Math.floor(stat/2))-5;
    },
    hd: function(char, classes) {
        var hd = 0;
        for (var classIndex = 0; classIndex < classes.length; classIndex++) {
            hd += char.classes[classes[classIndex].name]||0;
        }
        return hd;
    }
} 
