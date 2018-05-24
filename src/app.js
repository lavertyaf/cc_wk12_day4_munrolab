const MunroView = require('./views/munro_view.js');
const MunroWrapperView = require('./views/munro_wrapper_view.js');
const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  const munroWrapperViewContainer = document.querySelector('#munros');
  const munroWrapperView = new MunroWrapperView(munroWrapperViewContainer);
  munroWrapperView.bindEvents();

  const munros = new Munros();
  // munros.bindEvents();
  munros.getData();
});
