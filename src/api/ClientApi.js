function getInjectedData(key) {
  var inj = window.__INJECTED[key];
  return inj;

};

var _data = getInjectedData("list") || [];

module.exports = {
  getArticles: function () {
    return _data;
  },

  getArticle: function (id) {
    var article;
    _data.forEach(function (d) {
      if (d.id == id) {
        article = d;
      }
    });

    return article || {id: "", content: ""};
  },

  setArticle: function (article, index) {

    _data[index] = article;
    return true;
  }
};
