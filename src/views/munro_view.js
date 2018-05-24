const PubSub = require('../helpers/pub_sub.js');

const MunroView = function(munro){
  this.munro = munro;
};

MunroView.prototype.createMunroContainer = function (container) {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro-container');
  const parag = document.createElement('p');
  const parag2 = document.createElement('p');
  const parag3 = document.createElement('p');
  parag.textContent = this.munro.name;
  parag2.textContent = this.munro.meaning;
  parag3.textContent = this.munro.height;
  munroContainer.appendChild(parag);
  munroContainer.appendChild(parag2);
  munroContainer.appendChild(parag3);
  container.appendChild(munroContainer);
};

module.exports = MunroView;
