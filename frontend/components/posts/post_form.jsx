var React = require('react'),
    PostStore = require('../../stores/post_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var PostForm = React.createClass({
  getInitialState: function () {
    return ({
      text: "",
      showFooter: false
    });
  },

  componentWillMount: function () {
    this.setState( {posterName: CurrentUserStore.currentUser().fname });
  },

  render: function () {
    if (this.state.showFooter) {
      return (
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="post-form-header" for="text">
              Make a Post, {this.state.posterName}
            </label>
            <textarea className="post-form-input" type="text" id="text" onChange={this.changeText}/>
            <feature className="post-form-footer group">
              <button className="post-form-button"> Post </button>
            </feature>
          </form>
        </div>
      );
    } else {
      return (
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="post-form-header" for="text">
              Make a Post, {this.state.posterName}
            </label>
            <input className="post-form-input" type="text" id="text" onClick={this.showFooter} onChange={this.changeText}/>
          </form>
        </div>
      );
    }
  },

  changeText: function(e) {
    this.setState({ text: e.target.value });
  },

  showFooter: function (e) {
    this.setState({ showFooter: true })
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var post = { post:
        {
        content: this.state.text,
        poster_id: CurrentUserStore.currentUser().id,
        target_id: this.props.userId
      }
    }

    PostStore.acceptNewPost(post);

    this.resetForm(e);
  },

  resetForm: function (e) {
    e.target.value = "";
    this.setState({ text: "", showFooter: false })
  }
});

module.exports = PostForm;
