var React = require('react');
var Link = require('react-router').Link;
var ArticleStore = require('../stores/ArticleStore');

var ArticleList = React.createClass({
  getInitialState: function () {
    return {
      articles: ArticleStore.getData()
    };
  },

  componentWillMount: function () {
    ArticleStore.addChangeListener(this._change);
  },

  render: function () {
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
  },

  _change: function () {
    if (!this.isMounted()) return false;
    this.setState({
      articles: ArticleStore.getData()
    });
  }
});

module.exports = ArticleList;
