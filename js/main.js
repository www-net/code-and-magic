import './game.js';
import './stat.js';
import './user-modal.js';
import './data.js';
import './validity.js';

fetch('https://25.javascript.pages.academy/code-and-magick/data')
  .then((response) => response.json())
  .then((wizards) => {
    console.log (wizards);
  });
