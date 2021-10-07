import { createSlice, current } from "@reduxjs/toolkit";

import avocado from "../../assets/img/fruits/avocado.svg";
import coconut from "../../assets/img/fruits/coconut.svg";
import banana from "../../assets/img/fruits/banana.svg";
import cat from "../../assets/img/fruits/cat.svg";
import grapefruit from "../../assets/img/fruits/grapefruit.svg";
import orange from "../../assets/img/fruits/orange.svg";
import strawberry from "../../assets/img/fruits/strawberry.svg";

// helper
import checkRow from "../../helper/checkRow";
import checkCol from "../../helper/checkCol";
import shiftCol from "../../helper/shiftCol";
import checkMove from "../../helper/checkMove";

const fruitArray = [
  avocado.src,
  coconut.src,
  banana.src,
  cat.src,
  // grapefruit.src,
  orange.src,
  strawberry.src,
];

const randomFruit = (arr, max) => {
  const randomNumber = Math.floor(Math.random() * max);
  return arr[randomNumber];
};

const shiffleFields = () => {
  let result = [];
  let count = 1;

  for (let i = 1; i < 6; i++) {
    const row = [];
    for (let j = 1; j < 5; j++) {
      let randomItem = {
        img: randomFruit(fruitArray, fruitArray.length),
        id: count,
        col: i,
        pos: j,
        isEmpty: false,
        select: false,
      };
      row.push(randomItem);
      count++;
    }
    result.push(row);
  }
  return result;
};

const initialState = {
  fields: [],
  selectFields: {
    first: null,
    second: null,
  },
  checked: false,
  matchRow: [],
  matchCol: [],
  explode: false,
  swap: false,
  checkSwap: false,
  startSwap: false,
  // Проверка на то что после перемешивания
  // не будет полей с совпадениями
  defaultShuffle: false,
  checkShuffle: false,
  // Проверка элементов после добавления
  checkAddsItems: false,
  // Загрузка при перемешивание
  loader: false,
  // количество очков
  score: 0,
  gameOver: false,
  gameScore: 0,
  bonus: 0,
  audio: null,
  firstPlay: true
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSound: (state, { payload }) => {
      state.audio = payload
    },
    // Перемешивание
    shuffle: (state) => {
      const store = current(state);
      const { fields } = store;
      state.fields = shiffleFields(state.fields);
      state.selectFields = { first: null, second: null };

      const res = checkMove(state.fields);
      state.checked = res;
      state.checkShuffle = true;
    },
    // Клик по элементу
    selectItem: (state, { payload }) => {
      const { col, pos } = payload;
      state.fields[col - 1][pos - 1].select =
        !state.fields[col - 1][pos - 1].select;
    },
    // Выбор первого элемента
    selectFirstItem: (state, { payload }) => {
      const { col, pos } = payload;
      state.selectFields.first = state.fields?.[col - 1]?.[pos - 1];
    },
    // Выбор второго элемента
    selectSecondItem: (state, { payload }) => {
      const { col, pos } = payload;
      const store = current(state);
      const currentItem = store.fields?.[col - 1]?.[pos - 1];

      const { first } = store.selectFields;

      if (!currentItem || !first) return

      // Если элементы одинаковые
      if (first.img === currentItem.img) {
        state.fields[col - 1][pos - 1].select = false;
        state.fields[first.col - 1][first.pos - 1].select = false;
        state.selectFields = { first: null, second: null };
        state.checkSwap = false;
        return;
      }
      // Если элемент соседний по вертикали
      if (
        (first.col + 1 === currentItem.col && first.pos === currentItem.pos) ||
        (first.col - 1 === currentItem.col && first.pos === currentItem.pos)
      ) {
        state.selectFields.second = store.fields[col - 1][pos - 1];
        state.checkSwap = true;
        return;
      }
      // Если элемент сосдений по горизонтали
      if (
        (first.pos + 1 === currentItem.pos && first.col === currentItem.col) ||
        (first.pos - 1 === currentItem.pos && first.col === currentItem.col)
      ) {
        state.selectFields.second = state.fields[col - 1][pos - 1];
        state.checkSwap = true;
        return;
      } else {
        // Если элемент не соседний
        state.fields[col - 1][pos - 1].select = false;
        state.fields[first.col - 1][first.pos - 1].select = false;
        state.selectFields = { first: null, second: null };
        state.checkSwap = false;
      }
    },

    // Свап двух элементов
    swapItems: (state, payload) => {
      const store = current(state);
      const { first, second } = store.selectFields;

      if (!store.swap) {
        state.fields[first.col - 1][first.pos - 1].select = false;
        state.fields[second.col - 1][second.pos - 1].select = false;
        state.selectFields = { first: null, second: null };

        state.checkSwap = false;
        state.startSwap = false;
        state.swap = false;
        return;
      }

      if (
        store.selectFields.second === null ||
        store.selectFields.first === null
      ) {
        state.selectFields = { first: null, second: null };
        state.checkSwap = false;
        state.startSwap = false;
        state.swap = false;
        return;
      }

      if (first.col !== null && second !== null) {
        state.fields[first.col - 1][first.pos - 1].img =
          state.selectFields.second.img;
        state.fields[first.col - 1][first.pos - 1].select = false;

        state.fields[second.col - 1][second.pos - 1].img =
          state.selectFields.first.img;
        state.fields[second.col - 1][second.pos - 1].select = false;

        state.selectFields = { first: null, second: null };
        state.checked = true;
        state.swap = false;
        state.checkSwap = false;
        state.startSwap = false;
      }
    },
    // Проверка на валидность хода
    checkSwap: (state, payload) => {
      const store = JSON.parse(JSON.stringify(current(state)));
      const { fields } = store;
      const { first, second } = store.selectFields;

      if (first.col !== null && second !== null) {
        fields[first.col - 1][first.pos - 1].img =
          store.selectFields.second.img;
        fields[first.col - 1][first.pos - 1].select = false;

        fields[second.col - 1][second.pos - 1].img =
          store.selectFields.first.img;
        fields[second.col - 1][second.pos - 1].select = false;
      }

      const res = checkMove(fields);
      state.checkSwap = false;
      state.swap = res;
      state.startSwap = true;
    },
    // Проверка на перемешивание поля
    checkDefaultShuffle: (state, payload) => {
      const store = current(state);
      const { fields } = store;

      const res = checkMove(state.fields);
      state.defaultShuffle = res;
      state.checkShuffle = false;
    },
    // Проверка по горизонтали
    checkHorizontal: (state, payload) => {
      const store = current(state);
      const { fields } = store;
      const result = checkRow(fields);
      state.matchRow = result;
      state.checked = false;
    },
    // Проверка по вертикали
    checkVertical: (state, payload) => {
      const store = current(state);
      const { fields } = store;
      const result = checkCol(fields);
      state.matchCol = result;
      state.checked = false;
    },
    // Выделение по горизонтали
    explodeHorizontal: (state, payload) => {
      const store = current(state);
      const flatMathRow = store.matchRow.flat(Infinity);
      flatMathRow.forEach((field) => {
        state.fields[field.col - 1][field.pos - 1].isEmpty = true;
      });
      state.explode = true;
    },

    // Выделение по вертикали
    explodeVertical: (state, payload) => {
      const store = current(state);
      const flatMathCol = store.matchCol.flat(Infinity);

      flatMathCol.forEach((field) => {
        state.fields[field.col - 1][field.pos - 1].isEmpty = true;
      });
      state.explode = true;
    },
    // Удаление элементов с поля
    deleteFields: (state, payload) => {
      const store = current(state);
      let count = 0;
      store.fields.flat(Infinity).forEach((el) => {
        if (el.isEmpty === true) {
          state.fields[el.col - 1][el.pos - 1].img = "";
          state.fields[el.col - 1][el.pos - 1].isEmpty = false;
          count++;
        }
      });
      state.score += count * 10;
      state.bonus = count * 10;
      if (count > 0) {
        state.audio.play()
      }
      state.explode = false;
    },
    // Смещение пустых значений
    shiftFields: (state, payload) => {
      const store = current(state);
      const { fields } = store;
      const res = shiftCol(fields);
      res.flat(Infinity).forEach((el) => {
        state.fields[el.col - 1][el.pos - 1].img = el.img;
      });
    },
    // Добавление новых элементов
    addNewFields: (state, payload) => {
      const store = current(state);
      const { fields } = store;
      fields.flat(Infinity).forEach((el) => {
        if (el.img === "") {
          state.fields[el.col - 1][el.pos - 1].img = randomFruit(
            fruitArray,
            fruitArray.length
          );
        }
      });
      state.checkAddsItems = true;
    },
    checkNewItems: (state, payload) => {
      const store = current(state);
      const { fields } = store;
      const res = checkMove(fields);
      state.checked = res;
    },
    load: (state, payload) => {
      const { result } = payload;
      state.loader = result;
    },
    endGame: (state, payload) => {
      const store = current(state);
      state.gameOver = true;
      state.gameScore = store.score;
    },
    startGame: (state, payload) => {
      const store = current(state);
      state.gameOver = false;
      state.score = 0;
    },
  },
});

export const { reducer, actions } = gameSlice;
