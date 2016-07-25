app.controller('classController', function ($scope) {
    if (!$scope.$parent.char) {
        $scope.$parent.char = {};
    }
    if (!$scope.$parent.char.classMeta) {
        $scope.$parent.char.classMeta = {};
        $scope.$parent.char.favouriteBonuses={};
    }

    $scope.util = util;
    $scope.classes = classes;
    $scope.domains = domains;

    $scope.getClassArray = function() {
        var character = $scope.$parent.char;
        var value = [];
        for (var key in character.classes) {
            if (character.classes.hasOwnProperty(key)) {
                if (character.classes[key] > 0) {
                    value.push({
                        name: key, 
                        level: character.classes[key]
                    });
                }
            }
        }
        return value;
    };

    $scope.getClasses = function() {
        var value = [];
        for (var key in $scope.$parent.char.classes) {
            if ($scope.$parent.char.classes.hasOwnProperty(key)) {
                if ($scope.$parent.char.classes[key]) {
                    value.push({name:key});
                }
            }
        }
        //value = ['a', 'b', 'c'];

        return value;
    };

    $scope.getRange = function(end) {
        var value = [];
        for (var i =1; i <= end; i++) {
            value.push(i);
        }
        return value;
    };

    $scope.findClass = function(classes, name) {
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].name === name) {
                return classes[i];
            }
        }
    };

    $scope.calculateHp = function(char, first, classes) {
        var myClasses=$scope.getClasses();
        var hp = 0;
        for (var i = 0; i < myClasses.length; i++) {
            var levels = char.classes[myClasses[i].name];
            if (myClasses[i].name === first) {
                hp += $scope.findClass(classes,first).HD;
                levels--;
            }
            for (var j = 0; j<levels; j++) {
                hp += $scope.findClass(classes,myClasses[i].name).HD/2+1;
            }
        }
        hp+=util.hd(char, classes)*util.statBonus(char.totalstat['con']);

        var favLevel = char.classes[char.classMeta.favourite];

        if(favLevel) {
            for (var k = 0; k < favLevel; k++) {
                if (char.favouriteBonuses[k] === "hp") {
                    hp++;
                }
            }
        }

        return hp;
    };

    $scope.addDomain = function(char, name, myclass) {
        if (!char.classMeta[myclass]) {
            char.classMeta[myclass]={};
        }
        if (!char.classMeta[myclass].domains) {
            char.classMeta[myclass].domains = [];
        }
        var found = false;
        for (var i = 0; i < char.classMeta[myclass].domains.length; i++) {
            if (char.classMeta[myclass].domains[i] === name) {
                found = true;
            }
        }
        var classData = $scope.findClass(classes, myclass);
        if (classData["class abilities"].domains <= char.classMeta[myclass].domains.length) {
            found = true;
        }
        if (!found) {
            char.classMeta[myclass].domains.push(name);
        }
    };

    $scope.removeDomain = function(char, dname, myclass) {
        if (!char.classMeta[myclass]) {
            char.classMeta[myclass]={};
        }
        if (!char.classMeta[myclass].domains) {
            char.classMeta[myclass].domains = [];
        }
        var index = -1;
        for (var i = 0; i < char.classMeta[myclass].domains.length; i++) {
            var domain = char.classMeta[myclass].domains[i];
            if (domain === dname) {
                index = i;
            }
        }
        var arr = char.classMeta[myclass].domains;
            
        if (index !== -1) {
            arr.splice(index, 1);
        }
    };
});
