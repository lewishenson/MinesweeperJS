'use strict';

angular.module('MinesweeperJS')
       .factory('Minefield', function () {
           var _rows = [],
               _numberOfRows = 0,
               _numberOfColumns = 0,
               _numberOfMines = 0;

           var clear = function () {
               while (_rows.length > 0) {
                   _rows.pop();
               }

               _numberOfRows = 0;
               _numberOfColumns = 0;
               _numberOfMines = 0;
           };

           var createSquares = function (numberOfRows, numberOfColumns) {
               clear();

               for (var i = 0; i < numberOfRows; i++) {
                   var row = {
                       squares: []
                   };

                   for (var j = 0; j < numberOfColumns; j++) {
                       var square = {
                           isCovered: true,
                           content: 'empty'
                       };
                       row.squares.push(square);
                   }

                   _rows.push(row);
               }

               _numberOfRows = numberOfRows;
               _numberOfColumns = numberOfColumns;
           };

           var getSquare = function (rowIndex, columnIndex) {
               return _rows[rowIndex].squares[columnIndex];
           };

           var getNumberOfMines = function () {
               var count = 0;

               _.forEach(_rows, function (row) {
                   _.forEach(row.squares, function (square) {
                       if (square.content === 'mine') {
                           count++;
                       }
                   });
               });

               return count;
           }

           var placeRandomMine = function () {
               var rowIndex = Math.floor(Math.random() * _numberOfRows);
               var columnIndex = Math.floor(Math.random() * _numberOfColumns);
               var square = getSquare(rowIndex, columnIndex);
               square.content = 'mine';
           };

           var placeMines = function (numberOfMines) {
               for (var i = 0; i < numberOfMines; i++) {
                   placeRandomMine();
               }

               while (getNumberOfMines() < numberOfMines) {
                   placeRandomMine();
               }

               _numberOfMines = numberOfMines;
           };

           return {
               rows: _rows,
               initialise: function (numberOfRows, numberOfColumns, numberOfMines) {
                   createSquares(numberOfRows, numberOfColumns);
                   placeMines(numberOfMines);
               }
           };
       });