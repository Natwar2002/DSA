let dp, mat;
let m, n;

var f = function (i,j) {
    if (i === m && j === n) return mat[i][j];
    if(dp[i][j] !== -1) return dp[i][j];

    let right = 0, down = 0;
    // go right
    if(i < m) {
        right = f(i+1, j);
    }
    // go down
    if(j < n) {
        down = f(i, j+1);
    }
    return dp[i][j] = mat[i][j] + Math.min(right, down);
};

var minPathSum = function(grid) {
    mat = [...grid];
    m = grid.length - 1;
    n = grid[0].length - 1;
    dp = Array(205);
    for(let i = 0; i < 205; i++){
        dp[i] = Array(205).fill(-1);
    }
    return f(0, 0);
};

let grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));