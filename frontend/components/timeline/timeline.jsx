var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    TimelineStore = require('../../stores/timeline_store'),
    PostForm = require('../posts/post_form'),
    PostCommentForm = require('../comments/post_comment_form'),
    PhotoCommentForm = require('../comments/photo_comment_form'),
    CommentDisplay = require('../comments/comment_display');

var Timeline = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore() );
  },

  getStateFromStore: function () {
    return ( {items: TimelineStore.allItems(), mainTimeLine: true });
  },

  componentDidMount: function () {
    this.storeCBToken = TimelineStore.addListener( function () {
      this.setState(this.getStateFromStore);
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  render: function () {
    return (
      <div className="main-timeline-container group">
        <div className="main-timeline-center">
          <PostForm userId={CurrentUserStore.currentUser().id}/>
          <ul className="main-timeline-index">
            {this.state.items.map (function (item, i) {
              var header;
              if (item.type === "Post") {
                    header = item.poster_name + " to " + item.target_name;
                  return (
                    <li key={i} className="timeline-index-item">
                      <h1 className="timeline-index-item-header">
                        <div>{header}</div>
                        <span>{item.date_and_time}</span>
                      </h1>
                      <div className="timeline-index-item-content">{item.content}</div>
                      <ul className="timeline-index-item-comments-list">
                        {item.comments.map( function (comment, i) {
                          return (
                            <CommentDisplay key={i} comment={comment} />
                          );
                        })}
                      </ul>
                      <div className="timeline-index-item-comment-form">
                        <PostCommentForm mainTimeLine={this.state.mainTimeLine} commentable_id={item.id} />
                      </div>
                    </li>
                  );
                } else if (item.type === "Photo") {
                  header = item.uploader;
                  return (
                    <li key={i} className="timeline-index-item">
                      <h1 className="timeline-index-item-header">
                        <div>{header}</div>
                        <span>{item.date_and_time}</span>
                      </h1>
                      <img className="timeline-photo-preview" src={item.medium_url} />
                      <ul className="timeline-index-item-comments-list">
                        {item.comments.map( function (comment, i) {
                          return (
                            <CommentDisplay key={i} comment={comment} />
                          );
                        })}
                      </ul>
                      <div className="timeline-index-item-comment-form">
                        <PhotoCommentForm mainTimeLine={this.state.mainTimeLine} commentable_id={item.id} />
                        </div>
                    </li>
                  );
                }
            }.bind(this))}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
