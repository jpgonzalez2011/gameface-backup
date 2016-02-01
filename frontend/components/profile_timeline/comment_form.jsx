var React = require('react'),
    PostStore = require('../../stores/post_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var CommentForm = React.createClass({
  getInitialState: function () {
    return ({
      content: "",
      showFooter: false
    });
  },

  handleKeydown: function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      PostStore.addNewComment({ comment: {
        commenter_id: CurrentUserStore.currentUser().id,
        commentable_id: this.props.commentable_id,
        commentable_type: "Post",
        content: this.state.content
      }});
    }
  },

  handleChange: function (e) {
    this.setState( { content: e.target.value } );
  },


  render: function () {
    return (
      <div className="comment-form-container group">
        <form className="comment-form">
          <textarea className="comment-form-input" type="text" onKeyDown={this.handleKeydown} onChange={this.updateContent}>
            Write a comment...
          </textarea>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
