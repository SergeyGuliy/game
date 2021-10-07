const deepCopy = (ar) => {
  return JSON.parse(JSON.stringify(ar));
};

const reverseCol = (clm) => {
  return clm.reverse();
};

const shiftCol = (arr) => {
  const copy = deepCopy(arr);

  const res = [];

  for (let i = 0; i < 4; i++) {
    let col = [copy[0][i], copy[1][i], copy[2][i], copy[3][i], copy[4][i]];

    for (let j = 0; j <= 4; j++) {
      const revCol = reverseCol([...col]);
      if (revCol[j].img === "") {
        let stop = false;
        for (let k = j + 1; k < revCol.length; k++) {
          if (stop === false && revCol[k].img !== "") {
            revCol[j].img = revCol[k].img;
            revCol[k].img = "";
            stop = true;
          }
        }
        const noramlCol = reverseCol([...revCol]);
        res.push([...noramlCol]);
      }
    }
  }
  return res;
};

export default shiftCol;
