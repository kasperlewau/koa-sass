module.exports = function (options) {
  var mw = require('node-sass').middleware(options);
  return function *(next) {
    yield mw.bind(mw, this.req, this.res);
    yield next;
  };
};