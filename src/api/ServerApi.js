var fs = require('fs');
var basedir = process.env.PWD

var FILES_DIR = basedir + '/articles';

module.exports = {
  getArticles: function () {
    var articles = fs.readdirSync(FILES_DIR),
      list = [];

    articles.forEach( function (a) {
      list.push({
        id: a.replace(".md", ""),
        content: ""
      });
    });
    return list;
  },

  getArticle: function (id) {
    var article = fs.readFileSync(FILES_DIR + '/' + id + ".md", {encoding: 'utf8'});

    return {
      id: id,
      content: article
    };
  }
};
