let getRandomInt = (min,max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(1, 10);

let getRandomFloat = (x,y,decimals) => {
  if (x < 0 || y < 0) {
    return -1;
  }

  if (x < y) {
    [x, y] = [y, x];
  }

  let cordinats = (Math.random() * (y - x) + x).toFixed(decimals);
  return parseFloat(cordinats);
};

getRandomFloat(1,5,3)

