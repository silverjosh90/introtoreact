var React = require('react')
var ReactDOM = require('react-dom')

var data = [
  // {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Container = React.createClass({
render: function() {
  return (
  <div className="commentBox">
      <h1>Comments</h1>
       <DerpShot author={this.props.author} />
       <Title />

      </div>
    );
  }
})

var DerpShot = React.createClass({
  render: function() {
    return (
      <div>
      <p>{this.props.data}</p>
      </div>
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
      <h1 className="titleWriter">
      New Title
      </h1>
    )
  }
})
ReactDOM.render(
  <Container data={data} />,
  document.getElementById('content')
);
