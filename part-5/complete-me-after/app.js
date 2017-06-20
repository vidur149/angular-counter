angular.module('calc', [])
    .controller("scope1", ["$scope", function($scope) {
        $scope.action = 'Sum';
        $scope.num1 = 0;
        $scope.num2 = 0;
        $scope.result = 0;
        $scope.backColor = "red";

        $scope.callForAction = function() {
            console.log($scope.operator);
        };
    }]);