var React = require("react");

var Item = React.createClass({
  getInitialState: function () {
    return {
      text: "Culo"
    };
  },
  render: function () {
    return (
      <div>
        <button onClick={this._clickHandler}>{this.state.text}</button>
      </div>
    );
  },
  
  _clickHandler: function () {
    this.setState({
      text: "Culino"
    });
  }
});

module.exports = Item;