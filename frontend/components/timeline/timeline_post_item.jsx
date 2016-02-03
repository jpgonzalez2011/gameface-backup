var React = require('react'),
    PostCommentForm = require('../comments/post_comment_form'),
    CommentDisplay = require('../comments/comment_display');



var TimelinePostItem = React.createClass({
  render: function () {
    return (
      <li key={this.props.i} className="timeline-index-item">
        <h1 className="timeline-index-item-header">
          <div>{this.props.header}</div>
          <span>{this.props.item.date_and_time}</span>
        </h1>
        <div className="timeline-index-item-content">{this.props.item.content}</div>
        <ul className="timeline-index-item-comments-list">
          {this.props.item.comments.map( function (comment, i) {
            return (
              <CommentDisplay key={i} comment={comment} />
            );
          })}
        </ul>
        <div className="timeline-index-item-comment-form">
          <PostCommentForm mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.item.id} />
        </div>
      </li>
    );
  }
});

module.exports = TimelinePostItem;
