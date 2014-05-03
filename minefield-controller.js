function MinesweeperController($scope) {
    function createMinefield() {
        var minefield = {
            rows: []
        };

        for (var i = 0; i < 9; i++) {
            var row = {
                squares: []
            };

            for (var j = 0; j < 9; j++) {
                var square = {
                    isRevealed: false
                };
                row.squares.push(square);
            }

            minefield.rows.push(row);
        }

        return minefield;
    }

    $scope.minefield = createMinefield();
}