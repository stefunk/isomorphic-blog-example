var React = require('react');
var Link = require('react-router').Link;
var ArticleStore = require('./ArticleStore');

var ArticleList = React.createClass({
  getInitialState: function () {
    return {
      articles: ArticleStore.getData()
    };
  },

  render: function () {
    console.log(this.state);
    var articles = this.state.articles;
    return (
      <div>
        <h1>{"Articles"}</h1>
        <ul>
          {
            articles.map(function (art) {
              return (<li><Link to="article" params={{id: art.id}}>{art.id}</Link></li>)
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = ArticleList;
