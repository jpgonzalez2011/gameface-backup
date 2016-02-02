var React = require('react'),
    PhotoStore = require('../../stores/photo_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var PhotoCommentForm = React.createClass({
  getInitialState: function () {
    return ({
      content: "",
      showFooter: false
    });
  },

  handleKeydown: function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      var comment = { comment: {
        commenter_id: CurrentUserStore.currentUser().id,
        commentable_id: this.props.commentable_id,
        commentable_type: "Photo",
        content: this.state.content
      }};
      PhotoStore.addNewComment(comment);
      this.setState({content: ""});
      $("#comment-form").val("");
    } else {
      this.handleChange(e);
    }
  },

  handleChange: function (e) {
    this.setState( { content: e.target.value } );
  },


  render: function () {
    return (
      <div className="comment-form-container group">
        <form className="comment-form">
          <textarea className="comment-form-input" type="text" id="comment-form" onKeyUp={this.handleKeydown}>
          </textarea>
        </form>
      </div>
    );
  }
});

module.exports = PhotoCommentForm;
