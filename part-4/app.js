angular.module('Stopwatch', [])
    .controller("MyCtrl", ['$scope', '$window', '$interval', function($scope, $window, $interval) {
        $scope.timer = '00:00:00';
        $scope.startWatch = function() {
            // write the logic for starting the stopwatch and displaying it in hh:mm:ss format
            $scope.onInterval = function() {
                // this function will be called after every second
            };

            // this will call the onInterval function every second
            $scope.myInterval = $interval($scope.onInterval, 1000);
        };

        $scope.stopWatch = function() {
            // write the logic for stopping the stopwatch here
        };

        $scope.resetWatch = function() {
            // write the logic for reseting the stopwatch here            
        }
    }]);