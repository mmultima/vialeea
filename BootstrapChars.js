var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.controller("myController", function($scope, $resource) {
    var Character = $resource('/rest/char/:charId',
        {charId:'@_id'},
        {} 
    );

    $scope.alignments = [ {abbr: 'LG', name: 'Lawful Good'},
                          {abbr: 'LN', name: 'Lawful Neutral'},
                          {abbr: 'LE', name: 'Lawful Evil'},
                          {abbr: 'NG', name: 'Neutral Good'},
                          {abbr: 'N', name: 'Neutral'},
                          {abbr: 'NE', name: 'Neutral Evil'},
                          {abbr: 'CG', name: 'Chaotic Good'},
                          {abbr: 'CN', name: 'Chaotic Neutral'},
                          {abbr: 'CE', name: 'Chaotic Evil'} ];


    $scope.sexes = ['F', 'M'];
    $scope.sexName = function(sex) {
        var nameMap = { 'F':'Female', 'M':'Male'};
        return nameMap[sex];
    };

    $scope.tab_page=1;

	if (!$scope.char) {
		//$scope.char = {};
        $scope.char = new Character({});
	}

	if (!$scope.char.classes) {
		$scope.char.classes = {};
}

    $scope.save = function() {
        $scope.char.$save();  
    };

    $scope.load = function(id) {
        $scope.char = Character.get({charId: id}, function() {
            //$scope.char = character;
            //console.log(character);
        });
    };

	$scope.classes = classes;

    $scope.isFirst = function(classname) {
        for (var i = 0; i < classes.length; i++) {
            var cur = classes[i];
            if ($scope.char.classes[cur.name]) {
                if (classname === cur.name) {
                    return true;
                }
                else { 
                    return false;
                }
            }
        }
        return true;
    }

$scope.hasAnimal = function() {
	var animal = false;
	if ($scope.char) {
		if ($scope.char.classes) {
			if ($scope.char.classes.Druid) {
				animal = true;
}
}
}


	return animal;
}

    $scope.active_tab = function(page) {
        if(page===$scope.tab_page) {
           return 'active';
        }
        return '';
    };
});

app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/stats', {
                templateUrl: 'partials/stats.html',
                controller: 'statsController'
            });
            $routeProvider.when('/feats', {
                templateUrl: 'partials/feats.html',
                controller: 'featsController'
            });
            $routeProvider.when('/damage', {
                templateUrl: 'partials/damage.html',
                controller: 'damageController'
            });
            $routeProvider.when('/skills', {
                templateUrl: 'partials/skills.html',
                controller: 'skillsController'
            });
            $routeProvider.when('/animalCompanion', {
                templateUrl: 'partials/animalCompanion.html',
                controller: 'animalCompanionController'
            });
            $routeProvider.when('/spells', {
                templateUrl: 'partials/spells.html',
                controller: 'spellsController'
            });
            $routeProvider.when('/equipment', {
                templateUrl: 'partials/equipment.html',
                controller: 'equipmentController'
            });
            $routeProvider.when('/load', {
                templateUrl: 'partials/load.html',
                controller: 'loadController'
            });
            $routeProvider.otherwise({
                redirectTo: '/stats'
            });
        }
        ]);
