var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  fetchArticle: function (id) {
    AppDispatcher.dispatch({
      actionType: "ARTICLE_FETCHED",
      data: {
        id: id,
        content: "# PORCODIO"
      }
    });
  },

  fetchArticleList: function () {
    AppDispatcher.dispatch({
      actionType: "LIST_FETCHED",
      data: [{id: "first_article.md", content: ""}, {id: "second_article.md", content: ""}]
    });
  }
};
