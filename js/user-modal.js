import "./util.js";
import { isEscEvent } from './util.js';
import { isEnterEvent } from './util.js';
import { createWizards } from './data.js';


const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

// const onPopupEnterPress = (evt) => {
//   if (isEnterEvent(evt)) {
//     evt.preventDefault();

//   }
// }

const onPopupEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

const openUserModal = () => {
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);

  userModalCloseElement.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    };
  });
}

const closeUserModal = () => {
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

userModalOpenElement.addEventListener ('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeUserModal();
  }
});

// список похожих волшебников
const userDialog = document.querySelector('.setup-similar');

userDialog.classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  const similarWizards = createWizards;

const similarListFragment = document.createDocumentFragment();

  similarWizards.forEach(({name, coatColor, eyesColor}) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
    similarListFragment.appendChild(wizardElement);
  });

similarListElement.appendChild(similarListFragment);
