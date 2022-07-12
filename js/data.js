
import { getRandomIntInclusive } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
]

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
]

const COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
]

const EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]

const SIMILAR_WIZARD_COUNT = 4;

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
}


const createWizard = () => {
  // const randomNameIndex = getRandomIntInclusive(0, NAMES.length - 1);
  // const randomSurnameIndex = getRandomIntInclusive(0, SURNAMES.length - 1);
  // const randomCoatColorsIndex = getRandomIntInclusive(0, COAT_COLORS.length - 1);
  // const randomEyesColorsIndex = getRandomIntInclusive(0, EYES_COLORS.length - 1);

  return {
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS),
  };
};

const createWizards = new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() =>
  createWizard()
);
// console.log(similarWizards);

export { createWizards };
