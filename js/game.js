'use strict';

angular.module('MinesweeperJS')
       .factory('Game', function (Minefield) {
           var minefield = Minefield;

           return {
               minefield: minefield,
               initialiseMinefield: function (numberOfRows, numberOfColumns, numberOfMines) {
                   minefield.initialise(numberOfRows, numberOfColumns, numberOfMines);
               }
           };
       });