const userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', () => {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов')
  } else if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя не должно превышать 25ти символов')
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязателное поле')
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.reportValidity();
