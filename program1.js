const getTotalIsles = function (grid) {


  // write your code here 
  if (!grid || grid.length===0) return 0 ; 

  const rows = grid.length; 
  const cols = grid[0].length;  

  const dfs=(i,j)=>{ 
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') return;
    grid[i][j] = 'W';
    dfs(i - 1, j); // Up
    dfs(i + 1, j); // Down
    dfs(i, j - 1); // Left
    dfs(i, j + 1); // Right
  }

};

module.exports = getTotalIsles;