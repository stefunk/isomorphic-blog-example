var React = require('react');
var Router = require('react-router');

var ArticleStore = require('./ArticleStore');

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
    return (
      <div>
        <div dangerouslySetInnerHTML={{
            __html: converter.makeHtml(this.state.article.content)
          }} />
      </div>
    );
  },

  _change: function (data) {
    this.setState({
      article: data
    });
  }
});
