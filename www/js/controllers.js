angular.module('starter.controllers', [])

    .controller('TimerCtrl', function ($scope) {
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
