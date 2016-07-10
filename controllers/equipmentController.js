app.controller('equipmentController', function ($scope) {
    $scope.weapons = weapons;

    if (!$scope.$parent.char.equipment) {
        $scope.$parent.char.equipment = {};
        if (!$scope.$parent.char.equipment.weapons) {
            $scope.$parent.char.equipment.weapons = [];
        }
    }

    $scope.addWeaponAndClose = function(weapon) {
        $scope.$parent.char.equipment.weapons.push(weapon);
        $("#weaponModal .mmclose").click();
    };

    $scope.removeWeapon = function (weapon) {
        $scope.$parent.char.equipment.weapons.splice(
            $scope.$parent.char.equipment.weapons.indexOf(weapon), 1);
    };
});
