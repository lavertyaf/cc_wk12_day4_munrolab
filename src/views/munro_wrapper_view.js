const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroWrapperView = function(container){
  this.container = container;
};

MunroWrapperView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros: data-ready', (evt) => {
    this.render(evt.detail);
  });
};

MunroWrapperView.prototype.render = function (munros) {
  munros.forEach((munro) => {
    const munroView = new MunroView(munro);
    munroView.createMunroContainer(this.container);
  })
};

module.exports = MunroWrapperView
