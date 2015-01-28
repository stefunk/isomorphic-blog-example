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

  componentWillMount: function () {
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

    var articleId = this.getParams().id;
    this.setState({
      article: ArticleStore.findById(articleId),
      articleId: articleId
    });
  }
});
