var React = require('react');

var CommentDisplay = React.createClass({
  render: function () {
    return (
      <li className="comment-item">
        <h1 className="comment-header">
          <div>{comment.commenter_name}</div>
          <p className="comment-content">
            {comment.content}
          </p>
        </h1>
        <span className="comment-timestamp">{comment.date_and_time}</span>
      </li>
    );
  }
});

module.exports = CommentDisplay;
