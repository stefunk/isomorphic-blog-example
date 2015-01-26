var fs = require('fs');
var basedir = process.env.PWD

var FILES_DIR = basedir + '/articles';

module.exports = {
  getArticles: function () {
    var articles = fs.readdirSync(FILES_DIR),
      list = [];

    articles.forEach( function (a) {
      list.push({
        id: a,
        content: ""
      });
    });
    console.log(list);
    return list;
  },

  getArticle: function (id) {
    var article = fs.readFileSync(FILES_DIR + '/' + id, {encoding: 'utf8'});

    return {
      id: id,
      content: article
    };
  }
};
