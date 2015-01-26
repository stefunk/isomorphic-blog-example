function getInjectedData(key) {
  var inj = window.__INJECTED[key];
  return inj;
  
};

module.exports = {
  getArticles: function () {
    return getInjectedData("list") || [];
  },
  
  getArticle: function (id) {
    return getInjectedData(id) || "";
  }
};