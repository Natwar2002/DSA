let neighbours = [[-1, 0], [0, -1], [1, 0], [0, 1]];
function bfs(b) {
    let q = [];
    let m = b.length;
    let n = b[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(j == 0 || i == 0 || j == n - 1 || i == m - 1) {
                if(b[i][j] == 'O') {
                    q.push([i, j]);
                    b[i][j] = 'A';
                }
            }
        }
    }
    while(q.length > 0) {
        let cur = q.shift();
        for(let [dx, dy] of neighbours) {
            let nx = cur[0] + dx;
            let ny = cur[1] + dy;
            if(nx >= m || ny >= n || nx < 0 || ny < 0) continue;
            if(b[nx][ny] == 'O') {
                q.push([nx, ny]);
                b[nx][ny] = 'A';
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(b[i][j] == 'O') b[i][j] = 'X';
            if(b[i][j] == 'A') b[i][j] = 'O';
        }
    }
}

var solve = function(board) {
    return bfs(board);
}