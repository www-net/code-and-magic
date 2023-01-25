
// получение рандомного числа в заданном диапазоне
const getRandomIntInclusive = function (min, max) {
  if (max > min && min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'Число должно быть положительным и/или больше минимального значения!';
}

// открытие и закрытие модального окна
const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
}

const isEnterEvent = (evt) => {
  return evt.key === ('Enter');
}







export {getRandomIntInclusive};
export {isEscEvent};
export {isEnterEvent};
