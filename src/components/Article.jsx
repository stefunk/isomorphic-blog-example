var React = require('react');
var Router = require('react-router');

var ArticleStore = require('../stores/ArticleStore');

var Showdown = require('showdown');
var converter = new Showdown.converter();

module.exports = React.createClass({

  mixins: [Router.State],

  getInitialState: function () {
    var articleId = this.getParams().id;
    return {
      articleId: articleId,
      article: ArticleStore.findById(articleId)
    };
  },

  componentDidMount: function () {
    ArticleStore.addChangeListener(this._change);
  },

  render: function () {
    var article = this.state.article;
    return (
      <div>
        <div dangerouslySetInnerHTML={{
            __html: converter.makeHtml(article.content)
          }} />
      </div>
    );
  },

  _change: function () {
    if (!this.isMounted()) return false;
    this.setState({
      article: ArticleStore.findById(this.state.articleId)
    });
  }
});
