const checkMove = (fields) => {
  let result = false;

  fields.forEach((row) => {
    if (
      row[0].img === row[1].img &&
      row[0].img === row[2].img &&
      row[0].img === row[3].img
    ) {
      result = true;
    }
    if (row[0].img === row[1].img && row[0].img === row[2].img) {
      result = true;
    }
    if (row[1].img === row[2].img && row[1].img === row[3].img) {
      result = true;
    }
  });

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
      result = true;
    }
    // [+,+,+,+,-]
    if (one.img === two.img && one.img === three.img && one.img === four.img) {
      result = true;
    }
    // [+,+,+,-,-]
    if (one.img === two.img && one.img === three.img) {
      result = true;
    }
    // [-,+,+,+,+]
    if (two.img === three.img && two.img === four.img && two.img === five.img) {
      result = true;
    }
    // [-,+,+,+,-]
    if (two.img === three.img && two.img === four.img) {
      result = true;
    }
    // [-,-,+,+,+]
    if (three.img === four.img && three.img === five.img) {
      result = true;
    }
  }
  return result;
};

export default checkMove;
