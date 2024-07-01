let neighbour = [[-1, 0], [0, -1], [1, 0], [0, 1]];

function bfs(grid) {
    let q = [];
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                q.push([[i, j], 0]);
            }
        }
    }
    let result = 0;
    while (!(q.length == 0)) {
        let cur = q.shift();
        let coords = cur[0];
        let tm = cur[1];
        for (let ni = 0; ni < 4; ni++) {
            let nx = coords[0] + neighbour[ni][0];
            let ny = coords[1] + neighbour[ni][1];
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (grid[nx][ny] == 1) {
                q.push([[nx, ny], tm + 1]);
                result = Math.max(result, tm + 1);
                grid[nx][ny] = 2;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return result;
}

var orangesRotting = function (grid) {
    return bfs(grid);
};