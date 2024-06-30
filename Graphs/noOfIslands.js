let g, m, n;

function dfs(row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n || g[row][col] !== '1') return;
    g[row][col] = 0;

    // Explore adjacent grid
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
}

var numIslands = function (grid) {
    g = grid;
    m = grid.length;
    n = grid[0].length;
    let land = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == '1') {
                dfs(row, col);
                land++;
            }
        }
    }
    return land;
}