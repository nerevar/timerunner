angular.module('starter.controllers', [])

    .controller('TimerCtrl', function ($scope, $interval) {

        $scope.currentTime = new Date();

        $interval(function() {
            $scope.currentTime = new Date();
        }, 70)

    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
