var fs = require('fs');
var basedir = process.env.PWD

var FILES_DIR = basedir + '/articles';

module.exports = {
  getArticles: function () {
    return fs.readdirSync(FILES_DIR);
  },
  
  getArticle: function (id) {
    return fs.readFileSync(FILES_DIR + '/' + id, {encoding: 'utf8'});
  }
};