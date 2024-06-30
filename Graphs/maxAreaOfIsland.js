let g, m, n;

function dfs(r, c) {
    if(r >= m || c >= n || r < 0 || c < 0 || g[r][c] != 1) return 0;
    g[r][c] = 0;
    return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
}

var maxAreaOfIsland = function (grid) {
    g = grid;
    m = grid.length, n = grid[0].length;
    let ans = 0;
    for(let row = 0; row < m; row ++) {
        for(let col = 0; col < n; col++) {
            if(grid[row][col] == 1) {
                ans = Math.max(ans, dfs(row, col));
            }
        }
    }
    return ans;
}