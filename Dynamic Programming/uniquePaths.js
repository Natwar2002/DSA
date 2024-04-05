let x, y, dp;

var f = function (i, j) {
    if(i == x-1 && j == y-1) return 1;
    
    let right = 0, down = 0;
    if(i < x-1) right = 
};

var uniquePath = function (m, n) {
  x = m;
  y = n;
  dp = Array(m);
  for(let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(-1);
  } 
  return f(0,0); 
};