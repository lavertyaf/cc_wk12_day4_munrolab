const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Munros = function(){

}

Munros.prototype.getData = function () {
  const request = new Request('https://munroapi.herokuapp.com/api/munros');
  request.get((data) => this.handleDataReady(data));
};

Munros.prototype.handleDataReady = function (data) {
  PubSub.publish('Munros: data-ready', data)
};

module.exports = Munros;
