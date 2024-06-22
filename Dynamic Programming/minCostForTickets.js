let c;
let s;
let lastDay;
let dp;

var f = function (day) {
    if(day > lastDay) return 0;
    if(!s.has(day)) return f(day+1);
    if(dp[day] !== -1) return dp[day];

    let ans = Math.min(c[0] + f(day+1), c[1] + f(day+7), c[2] + f(day+30));
    return dp[day] = ans;
};

var mincostTickets = function(days, costs) {
  c = costs;
  lastDay = days[days.length - 1];
  s = new Set(days);
  dp = Array(366).fill(-1);
  return f(1);
};

let days = [1,4,6,7,8,20], costs = [2,7,15];
console.log(mincostTickets(days, costs));