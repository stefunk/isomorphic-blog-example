var merge = require('merge');
var Api = require('./api/ServerApi.js');

var _data = Api.getArticles();

module.exports = merge({}, {}, {
  findById: function (id) {
    return Api.getArticle(id);
  },
  getData: function () {
    return _data;
  }
});