var React = require('react')
var ReactDOM = require('react-dom')

// var data = [
//   {id: 1, author: "Pete Hunt", text: "This is one comment"},
//   {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
// ];
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {this.props.children}
      </div>
    )
  }
})


var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
  $.ajax({
    url: this.props.url,
    datatype: 'json',
    cache: false,
    success: function(data){
      this.setState({data: data})
    }.bind(this),
    error: function(xhr,status,err) {
      console.error(this.props.url, status, err.toString())
    }.bind(this)
  });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data
    var newComment = comments.concat([data])
    this.setState({data: newComments})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      succes: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments})
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })

  },
  getnInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render: function(){
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key = {comment.id}>
        {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(author) {
    this.setState({author: author.target.value})
  },
  handleTextChange: function(text) {
    this.setState({text: text.target.value})
  },

  handleSubmit: function(submit) {
    submit.preventdefault();
    var author = this.state.author.trim()
    var text = this.state.text.trim()

    if(!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''})
  }
  render: function() {
    return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name" value={this.state.author} onChange={this.state.handleAuthorChange} />
          <input type="text" placeholder="Say something..." value={this.state.author} onChange={this.state.handleTextChange} />
          <input type="submit" value="Post" />
        </form>
    );
  }
});


ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
)
