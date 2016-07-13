app.controller('equipmentController', function ($scope) {
    $scope.weapons = weapons;
    $scope.armors = armors;

    if (!$scope.$parent.char.equipment) {
        $scope.$parent.char.equipment = {};
    }
    if (!$scope.$parent.char.equipment.weapons) {
        $scope.$parent.char.equipment.weapons = [];
    }
    if (!$scope.$parent.char.equipment.armors) {
        $scope.$parent.char.equipment.armors = [];
    }

    $scope.addWeaponAndClose = function(weapon) {
        $scope.$parent.char.equipment.weapons.push(weapon);
        $("#weaponModal .mmclose").click();
    };

    $scope.removeWeapon = function (weapon) {
        $scope.$parent.char.equipment.weapons.splice(
            $scope.$parent.char.equipment.weapons.indexOf(weapon), 1);
    };
    $scope.addArmorAndClose = function(armor) {
        $scope.$parent.char.equipment.armors.push(armor);
        $("#armorModal .mmclose").click();
    };

    $scope.removeArmor = function (armor) {
        $scope.$parent.char.equipment.armors.splice(
            $scope.$parent.char.equipment.armors.indexOf(armor), 1);
    };
});
