var AppDispatcher = require('../dispatcher/Dispatcher');
var PromiseApi = require('../utils/ClientPromiseApi');

module.exports = {
  fetchArticle: function (id) {
    var promise = PromiseApi.fetchArticleById(id)
      .then(function (data) {
        AppDispatcher.dispatch({
          actionType: "ARTICLE_FETCHED",
          data: data
        });
      });
  },

  fetchArticleList: function () {
    var promise = PromiseApi.fetchArticles()
      .then(function (data) {
        AppDispatcher.dispatch({
          actionType: "LIST_FETCHED",
          data: data
        });
      });
  }
};
