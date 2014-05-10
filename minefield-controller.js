function MinesweeperController($scope) {
    $scope.minefield = this._createMinefield(9, 9, 10);
}

MinesweeperController.prototype._createMinefield = function (numberOfRows, numberOfColumns, numberOfMines) {
    var minefield = {
        rows: []
    };

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

        minefield.rows.push(row);
    }

    var getSquare = function (rowIndex, columnIndex) {
        return minefield.rows[rowIndex].squares[columnIndex];
    };

    var placeRandomMine = function () {
        var rowIndex = Math.floor(Math.random() * numberOfRows);
        var columnIndex = Math.floor(Math.random() * numberOfColumns);
        var square = getSquare(rowIndex, columnIndex);
        square.content = 'mine';
    };

    for (var i = 0; i < numberOfMines; i++) {
        placeRandomMine();
    }

    while (this._getNumberOfMines(minefield) < numberOfMines) {
        placeRandomMine();
    }

    return minefield;
};

MinesweeperController.prototype._getNumberOfMines = function (minefield) {
    var count = 0;

    _.forEach(minefield.rows, function (row) {
        _.forEach(row.squares, function (square) {
            if (square.content === 'mine') {
                count++;
            }
        });
    });

    return count;
};