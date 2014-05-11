'use strict';

angular.module('MinesweeperJS', [])
       .controller('MinesweeperController', function ($scope, Minefield) {
           Minefield.initialise(9, 9, 10);

           $scope.minefield = Minefield;
       });