app.controller('statblockController', function ($scope) {
    var s = window.location.search;
    if (s) { 
        $scope.charId = s.substring(s.indexOf('=')+1);
    }
    if (!$scope.charId) {
        $scope.charId = 'No ID!';
    }
    else {
        $scope.$parent.load($scope.charId);
    }

    $scope.getSizeName = function(size) {
        return size==='M'?'Medium':'Small';
    };

    $scope.getNumEnd = function(num) {
        if (num === 1 || num === '1') {
            return 'st';
        }
        if (num === 2 || num === '2') {
            return 'nd';
        }
        if (num === 3 || num === '3') {
            return 'rd';
        }
        return 'th';
    };


    $scope.expandAlignment = function(abbr) {
        //return;
        if(!abbr) {
            return;
        }

        if (abbr.length > 1) {
            abbr = abbr.substring(0,1) + " " + abbr.substring(1);
        }
        abbr = abbr.replace('L', 'Lawful');
        abbr = abbr.replace('N', 'Neutral');
        abbr = abbr.replace('C', 'Chaotic');
        abbr = abbr.replace('G', 'Good');
        abbr = abbr.replace('E', 'Evil');
        return abbr;
    };
});
