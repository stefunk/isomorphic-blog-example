var ES6Promise = require('es6-promise').Promise;

var getJSON = function(url) {
  var promise = new ES6Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { resolve(this.response); }
        else { reject(this); }
        }
      };
    });

  return promise;
};

module.exports = {
  fetchArticleById: function (id) {
    return getJSON('/api/article/'+id);
  },
  fetchArticles: function () {
    return getJSON('/api/articles');
  }
};
