app.controller('damageController', function ($scope) {	
    $scope.stats=['str', 'dex', 'con', 'int', 'wis', 'cha'];

    $scope.baseCarrys = [100,115,130,150,175,200,230,260,300,350];
    $scope.floor = function(value) {
        return Math.floor(value);
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

    $scope.feats=[
        {
            name: "Deadly aim",
            choice: 1, 
            condition: "always", 
            effect: {
                rangedAttack: -1, 
                rangedDamage: 2
            }
        },
        {
            name: "Point blank shot",
            choice: 0, 
            condition: {
                range: "30"
            },
            effect: {
                rangedAttack: 1, 
                rangedDamage: 1
            }
        },
        {
            name: "Weapon focus",
            choice: 0, 
            condition: "always", 
            effect: {
                rangedAttack: 1, 
            }
        }
    ];

    $scope.chosenFeats = {
    };
});
