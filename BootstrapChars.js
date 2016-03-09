var app = angular.module('myApp', ['ngRoute']);

app.controller("myController", function($scope) {
    $scope.tab_page=1;

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
            $routeProvider.otherwise({
                redirectTo: '/stats'
            });
        }
        ]);
