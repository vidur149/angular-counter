angular.module('counter', [])
    .controller("myCtrl", ["$scope", function($scope) {
        $scope.counter = 0;

        $scope.increment = function() {
            $scope.counter = $scope.counter + 1;
        };
    }]);