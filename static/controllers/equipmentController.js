app.controller('equipmentController', function ($scope) {
    $scope.weapons = weapons;
    $scope.armors = armors;
    $scope.items = items;
    $scope.materials = materials;

    if (!$scope.$parent.char.equipment) {
        $scope.$parent.char.equipment = {};
    }
    if (!$scope.$parent.char.equipment.weapons) {
        $scope.$parent.char.equipment.weapons = [];
    }
    if (!$scope.$parent.char.equipment.armors) {
        $scope.$parent.char.equipment.armors = [];
    }
    if (!$scope.$parent.char.equipment.items) {
        $scope.$parent.char.equipment.items = [];
    }

    $scope.addWeaponAndClose = function (baseWeapon, material) {
        var weapon = JSON.parse(JSON.stringify(baseWeapon));


        if (material && material !== 'normal') {
            weapon.material = material;
        }
        $scope.$parent.char.equipment.weapons.push(weapon);
        $("#weaponModal .mmclose").click();
    };

    $scope.calculatePrice = function (item, type, weight) {
        var value = item.price, material = materials[item.material], origWeight = weight, atype = item.type;
        if (type === 'weapon') {
            if (item.material !== 'normal' && item.material) {
                if (material.weapons && material.weapons.price && material.weapons.price.weight) {
                    if (material.weight) {
                        if (material.weight.mult) {
                            origWeight = origWeight / material.weight.mult;
                        }
                    }
                    value += origWeight * material.weapons.price.weight;
                }
                if (material.weapons.price.price) {
                    value += item.price * material.weapons.price.price;
                }
            }
        }
        if (type === 'armor') {
            if (item.material !== 'normal' && item.material) {
                
                if (material.armors && material.armors.price && material.armors.price[atype] && material.armors.price[atype].weight) {
                    if (material.weight) {
                        if (material.weight.mult) {
                            origWeight = origWeight / material.weight.mult;
                        }
                    }
                    value += origWeight * material.armors.price.weight;
                }
                if (material.armors && material.armors.price && material.armors.price[atype] && material.armors.price[atype].add) {
                    value += material.armors.price[atype].add;
                }
            }
        }
        if (type === 'item') {
            if (item.material !== 'normal' && item.material) {
                if (material.items && material.items.price && material.items.price.weight) {
                    if (material.weight) {
                        if (material.weight.mult) {
                            origWeight = origWeight / material.weight.mult;
                        }
                    }
                    value += origWeight * material.items.price.weight;
                }
                if (material.items.price.price) {
                    value += item.price * material.items.price.price;
                }
            }
        }
        return value;
    };

    $scope.removeWeapon = function (weapon) {
        $scope.$parent.char.equipment.weapons.splice(
            $scope.$parent.char.equipment.weapons.indexOf(weapon),
            1
        );
    };
    $scope.addArmorAndClose = function (baseArmor, material) {
        var armor = JSON.parse(JSON.stringify(baseArmor));
        if (material && material !== 'normal') {
            armor.material = material;
        }
        $scope.$parent.char.equipment.armors.push(armor);
        $("#armorModal .mmclose").click();
    };

    $scope.removeArmor = function (armor) {
        $scope.$parent.char.equipment.armors.splice(
            $scope.$parent.char.equipment.armors.indexOf(armor),
            1
        );
    };
    $scope.addItemAndClose = function (baseItem, material) {
        //item.material = material;
        var item = JSON.parse(JSON.stringify(baseItem));
        if (material && material !== 'normal') {
            item.material = material;
        }
        $scope.$parent.char.equipment.items.push(item);
        $("#itemModal .mmclose").click();
    };
    $scope.removeItem = function (item) {
        $scope.$parent.char.equipment.items.splice(
            $scope.$parent.char.equipment.items.indexOf(item),
            1
        );
    };

    $scope.calculateTotal = function (field, arr1, arr2, arr3) {
        var total = 0, i, j, k;
        if (arr1) {
            for (i = 0; i < arr1.length; i += 1) {
                total += arr1[i][field];
            }
        }
        if (arr2) {
            for (j = 0; j < arr2.length; j += 1) {
                total += arr2[j][field];
            }
        }
        if (arr3) {
            for (k = 0; k < arr3.length; k += 1) {
                total += arr3[k][field];
            }
        }
        return total;
    };

    $scope.calculateDiceForSize = function (number, dice, size) {
        if (!size) {
            size = 'M';
        }

        var sizes = "FDTSMLHGC", sizeIndex = sizes.indexOf(size), index, indexL;
        if (sizeIndex === 4) {
            return number + "d" + dice;
        }
        var damageProgression = [
            "1",
            "1d2",
            "1d3",
            "1d4",
            "1d6",
            "1d8",
            "1d10",
            "2d6",
            "2d8",
            "3d6",
            "3d8",
            "4d6",
            "4d8",
            "6d6",
            "6d8",
            "8d6",
            "8d8",
            "12d6",
            "12d8",
            "16d6"
        ];

        var origDice = number + "d" + dice;
        var damageIndex = damageProgression.indexOf(origDice);
        if (sizeIndex < 4) {
            for (index = 4; index > sizeIndex; index -= 1) {
                damageIndex -= 1;
            }
        }
        else {
            for (indexL = 4; indexL < sizeIndex; indexL += 1) {
                if (damageIndex < 5) {
                    damageIndex += 1;
                }
                else {
                    damageIndex += 2;
                }
            }
        }
        return damageProgression[damageIndex];
    };

    $scope.adjustWeightForSize = function (item, char) {
        var value = item.weight, material = materials[item.material];
        if (item.material) {
            if ((material.weapons || material.armor) && material.weight) {
                if (material.weight.mult) {
                    value = value * material.weight.mult;
                }
            }
        }

        if (char && char.race && char.race.size === 'S') {
            return value / 2;
        }
        return value;
    };
});
