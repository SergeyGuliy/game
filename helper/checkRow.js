const checkRow = (fields) =>
  fields.map((row) => {
    let res = [];
    if (
      row[0].img === row[1].img &&
      row[0].img === row[2].img &&
      row[0].img === row[3].img
    ) {
      return (res = [...row]);
    }
    if (row[0].img === row[1].img && row[0].img === row[2].img) {
      return (res = [row[0], row[1], row[2]]);
    }
    if (row[1].img === row[2].img && row[1].img === row[3].img) {
      return (res = [row[1], row[2], row[3]]);
    }
    return res;
  });

export default checkRow;
