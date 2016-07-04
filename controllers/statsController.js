app.controller('statsController', function ($scope) {
    $scope.calculateTotalSave = function(save) {
        var value = 0;

         for (var classIndex = 0; classIndex < classes.length; classIndex++) {
             var level = $scope.$parent.char.classes[classes[classIndex].name]||0;
             if (level) {
                value += $scope.calculateSave(classes[classIndex], save); 
             }
         }
 
        var stat = 'Fort'===save?'con':'Ref'===save?'dex':'wis';
        value += $scope.statBonus($scope.$parent.char.totalstat[stat]);	
        return value;
    }

    $scope.calculateSave = function(myclass, save) {
	var level = $scope.showLevel(myclass);
	if (level === 0) {
            return 0;
        }

        var value = 0;

        if (myclass.Saves[save]==='Good') {
            value = 2+Math.floor(level/2);
        }
	else {
            value = Math.floor(level/3);
        }

        return value;
    }

    $scope.calculateHd = function() {
         var hd = 0;

         for (var classIndex = 0; classIndex < classes.length; classIndex++) {
             hd += $scope.$parent.char.classes[classes[classIndex].name]||0;
         }
         return hd;
    }

    if (typeof $scope.$parent.pblimit === 'undefined') {
        $scope.$parent.pblimit = true;
    }

    if (!$scope.$parent.char) {
        $scope.$parent.char = {};
    }

    if (!$scope.$parent.char.classes) { 
        $scope.$parent.char.classes = {};
    }

    $scope.showLevel = function(myclass) {
        if (!$scope.$parent.char.classes[myclass.name]) {
            return 0;
        }
        return $scope.$parent.char.classes[myclass.name];
    }

    $scope.changeLevel = function(myclass, amount) {
        var curlevel = $scope.showLevel(myclass);
        if (!(curlevel + amount < 0)) {
            $scope.$parent.char.classes[myclass.name] = curlevel + amount;
        }
    } 


    $scope.classes = classes;

    $scope.stats=['str', 'dex', 'con', 'int', 'wis', 'cha'];
    
    $scope.reset = function(value) {
        if (!$scope.$parent.char.base) {
            $scope.$parent.char.base = {};
        }
        for (var i = 0; i < $scope.stats.length; i++) {
            $scope.$parent.char.base[$scope.stats[i]]=value+0;
        }
    };

    if (!$scope.$parent.char.base) {
        $scope.reset(10);
    }

    $scope.baseCarrys = [100,115,130,150,175,200,230,260,300,350];
    $scope.floor = function(value) {
        return Math.floor(value);
    };
    $scope.calculateCarryingCapacity = function (strenght) {
        var total = 0;
        if (strenght < 11) {
            total = strenght * 10;
        }
        else {
            total = $scope.baseCarrys[strenght%10]*Math.pow(4,Math.floor(strenght/10)-1);
        }
	if ($scope.$parent.char.race.size && $scope.$parent.char.race.size === 'S') {
            total = Math.floor(3*total/4); 
        }
        
        return total;
    };

    $scope.maybeAdjust = function (stat, amount) {
        var cur = $scope.$parent.char.base[stat];
	if ((cur+amount >= 7 && cur+amount <= 18)||(!$scope.$parent.pblimit)) {
            $scope.$parent.char.base[stat] = cur+amount;
        }
    }



    $scope.$watch('$parent.char.race', function(race) {
        if ($scope.$parent.char.freestat) {
            if (race.freescores) {
                race.scores[$scope.$parent.char.freestat]=2;
            }
            if (race.freescores > 1) {
                race.scores[$scope.$parent.char.freestat2]=2;
            }
	}
    });


    $scope.$watch('$parent.char.freestat', function(value) {
        if ($scope.$parent.char.race.freescores) {
	        $scope.clearRacials();
            $scope.$parent.char.race.scores[value]=2;
            $scope.$parent.char.race.scores[$scope.$parent.char.freestat2]=2;
        }
    });

    $scope.$watch('$parent.char.freestat2', function(value) {
        if ($scope.$parent.char.race.freescores) {
	        $scope.clearRacials();
            $scope.$parent.char.race.scores[$scope.$parent.char.freestat]=2;
            $scope.$parent.char.race.scores[$scope.$parent.char.freestat2]=2;
        }
    });
    $scope.clearRacials = function() {
        $scope.$parent.char.race.scores = {};
    };

    $scope.statBonus=function(stat){
        return (Math.floor(stat/2))-5;
    };
    $scope.threequarterbab = function(lvl){
        return (Math.floor(lvl*3/4));
    };
    $scope.atleast = function(value, limit) {
        return value >= limit;
    };
    $scope.$parent.races=[
        {
            name: "Human",
            freescores: 1,
            scores: {},
            speed: 30,
            size: 'M'
        },
        {
            name: "Human (dualtalent)",
            freescores: 2,
            scores: {},
            speed: 30,
            size: 'M'
        },
        {
            name: "Dwarf",
            freescores: 0,
            scores: {
                con: 2,
                wis: 2,
                cha: -2
            },
            speed: 20,
            size: 'M'
        },
        {
            name: "Gnome",
            freescores: 0,
            scores: {
                con: 2, 
                cha: 2,
                str: -2
            },
            speed: 20,
            size: 'S'
        },
        {
            name: "Half-orc",
            freescores: 1,
            scores: {
            },
            speed: 30,
            size: 'M'
        },
        {
            name: "Half-elf",
            freescores: 1,
            scores: {
            },
            speed: 30,
            size: 'M'
        },
        {
            name: "Tengu",
            freescores: 0,
            scores: {
                con: -2, 
                dex: 2,
                wis: 2
            },
            speed: 30,
            size: 'M'
        },
        {
            name: "Kitsune",
            freescores: 0,
            scores: {
                dex: 2, 
                cha: 2,
                str: -2
            },
            speed: 30,
            size: 'M'
        },
        {
            name: "Wayang",
            freescores: 0,
            scores: {
                dex: 2, 
                int: 2,
                wis: -2
            },
            speed: 20,
            size: 'S'
        },
        {
            name: "Nagaji",
            freescores: 0,
            scores: {
                str: 2, 
                cha: 2,
                int: -2
            },
            speed: 20,
            size: 'M'
        },
        {
            name: "Halfling",
            freescores: 0,
            scores: {
                dex: 2, 
                cha: 2,
                str: -2
            },
            speed: 20,
            size: 'S'
        },
	{
            name: "Elf", 
            freescores: 0,
            scores: {
                con: -2,
                dex: 2,
                int: 2
            },
            speed: 30,
            size: 'M'
        }
    ];

    if (typeof $scope.$parent.char.race === 'undefined') {
        $scope.$parent.char.race = $scope.$parent.races[0];
    }    

    $scope.$parent.races = _.sortBy($scope.$parent.races, 'name');

    for (var why = 0; why < $scope.$parent.races.length; why++) {
        if ($scope.$parent.char.race.name === $scope.$parent.races[why].name) {
            $scope.$parent.char.race = $scope.$parent.races[why];
        }
    }

    $scope.calculatePointBuy = function(stat) {
        var cost = 0;
        var n = 0;
        var m = 0;
        if (stat>10) {
            n=Math.floor((stat-10)/2);
	    cost = (n*n+n)/2;
            m=Math.floor((stat-11)/2);
            cost = cost + 1 + (m*m+m)/2; 	
        }
        if (stat<10) {
            n=Math.floor((-stat+10)/2);
	    cost = -(n*n+n)/2;
            m=Math.floor((-stat+11)/2);
            cost = cost - (m*m+m)/2; 	
        }
        return cost;
    };
});
