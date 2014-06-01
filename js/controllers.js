'use strict';

angular.module('MinesweeperJS', [])
       .controller('MinesweeperController', function ($scope, Game) {
           Game.initialiseMinefield(9, 9, 10);

           $scope.game = Game;
       });