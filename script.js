function knightMoves(start, target) {
  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, 1],
  ];
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());
  while (queue.length > 0) {
    console.log("start while");
    const oldPath = queue.shift();
    const position = oldPath[oldPath.length - 1];
    for (const [dx, dy] of moves) {
      let newX = position[0] + dx;
      let newY = position[1] + dy;
      // console.log(position);

      if (insideBoard(newX, newY) && !visited.has([newX, newY].toString)) {
        //if true then it's a valid possibility
        const newPath = [...oldPath, [newX, newY]]; // oldpath
        queue.push(newPath); //adding newpath to queue so it gets shifted to be old path later
        if (target[0] == newX && target[1] == newY) {
          //if true means we're done
          console.log("found it!!");
          console.log("the oldPath is:");
          for (let i in newPath) {
            console.log(newPath[i]);
          }
          return;
        }
      }
    }
  }
}

function insideBoard(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

knightMoves([3, 3], [7, 7]);

// [ 3, 3 ] => [ 1, 4 ] => [ 3, 5 ] => [ 5, 6] => [7, 7]
