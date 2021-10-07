const checkCol = (fields) => {
  const res = [];
  for (let i = 0; i < 4; i++) {
    const col = [
      fields[0][i],
      fields[1][i],
      fields[2][i],
      fields[3][i],
      fields[4][i],
    ];

    const [one, two, three, four, five] = col;

    // [+,+,+,+,+]
    if (
      one.img === two.img &&
      one.img === three.img &&
      one.img === four.img &&
      one.img === five.img
    ) {
      res.push([one, two, three, four, five]);
    }
    // [+,+,+,+,-]
    if (one.img === two.img && one.img === three.img && one.img === four.img) {
      res.push([one, two, three, four]);
    }
    // [+,+,+,-,-]
    if (one.img === two.img && one.img === three.img) {
      res.push([one, two, three]);
    }
    // [-,+,+,+,+]
    if (two.img === three.img && two.img === four.img && two.img === five.img) {
      res.push([two, three, four, five]);
    }
    // [-,+,+,+,-]
    if (two.img === three.img && two.img === four.img) {
      res.push([two, three, four]);
    }
    // [-,-,+,+,+]
    if (three.img === four.img && three.img === five.img) {
      res.push([three, four, five]);
    }
  }
  return res;
};

export default checkCol;
