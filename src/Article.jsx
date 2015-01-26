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
      content: ArticleStore.findById(articleId)
    };
  },
  
  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{
            __html: converter.makeHtml(this.state.content)
          }} />
      </div>
    );
  }
});