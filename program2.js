const decodeTheRing = function (s, p) {

    // write your code here
    const m = s.length;
    const n = p.length;

    const dp = Array(n + 1).fill(false).map(() => Array(m + 1).fill(false));
    dp[0][0] = true;

  };
  
  module.exports = decodeTheRing;