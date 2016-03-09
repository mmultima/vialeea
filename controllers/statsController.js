app.controller('statsController', function ($scope) {
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
        if (!$scope.$parent.base) {
            $scope.$parent.base = {};
        }
        for (var i = 0; i < $scope.stats.length; i++) {
            $scope.$parent.base[$scope.stats[i]]=value+0;
        }
    };

    if (!$scope.$parent.base) {
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
	if ($scope.$parent.race.size && $scope.$parent.race.size === 'S') {
            total = Math.floor(3*total/4); 
        }
        
        return total;
    };

    $scope.maybeAdjust = function (stat, amount) {
        var cur = $scope.$parent.base[stat];
	if ((cur+amount >= 7 && cur+amount <= 18)||(!$scope.$parent.pblimit)) {
            $scope.$parent.base[stat] = cur+amount;
        }
    }



    $scope.$watch('$parent.race', function(race) {
        if ($scope.$parent.freestat) {
            if (race.freescores) {
                race.scores[$scope.$parent.freestat]=2;
            }
            if (race.freescores > 1) {
                race.scores[$scope.$parent.freestat2]=2;
            }
	}
    });


    $scope.$watch('$parent.freestat', function(value) {
        if ($scope.$parent.race.freescores) {
	        $scope.clearRacials();
            $scope.$parent.race.scores[value]=2;
            $scope.$parent.race.scores[$scope.$parent.freestat2]=2;
        }
    });

    $scope.$watch('$parent.freestat2', function(value) {
        if ($scope.$parent.race.freescores) {
	        $scope.clearRacials();
            $scope.$parent.race.scores[$scope.$parent.freestat]=2;
            $scope.$parent.race.scores[$scope.$parent.freestat2]=2;
        }
    });
    $scope.clearRacials = function() {
        $scope.$parent.race.scores = {};
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

    if (typeof $scope.$parent.race === 'undefined') {
        $scope.$parent.race = $scope.$parent.races[0];
    }    

    $scope.$parent.races = _.sortBy($scope.$parent.races, 'name');

    for (var why = 0; why < $scope.$parent.races.length; why++) {
        if ($scope.$parent.race.name === $scope.$parent.races[why].name) {
            $scope.$parent.race = $scope.$parent.races[why];
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