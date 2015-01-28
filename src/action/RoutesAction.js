var AppAction = require('./AppAction');

module.exports = {
  /*
  * @param {array} routeArray
  */
  findActiveRoute: function (routeArray) {
    var length = routeArray.length;
    return routeArray[length-1].name;
  },


  triggerRouteChange: function (routeName, params) {
    switch (routeName) {
      case "article":
        AppAction.fetchArticle(params.id);
        break;
      default:
        AppAction.fetchArticleList();
        break;
    }
  }
};
