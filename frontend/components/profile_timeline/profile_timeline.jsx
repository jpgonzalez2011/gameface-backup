var React = require('react'),
    PostForm = require('./post_form');

var ProfileTimeline = React.createClass({
  render: function () {
    return (
      <div className="timeline-container group">
        <div className="timeline-right-side">
          <PostForm />
        </div>

      </div>
    );
  }
});

module.exports = ProfileTimeline;
