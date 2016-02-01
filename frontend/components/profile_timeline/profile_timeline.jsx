var React = require('react'),
    PostForm = require('./post_form'),
    PostStore = require('../../stores/post_store');

var ProfileTimeline = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
  },

  getStateFromStore: function (props) {
    return ({ posts: PostStore.findByTarget(props.params.userId) });
  },

  componentDidMount: function () {
    this.storeCBToken = PostStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
    PostStore.emptyPosts(this.props.params.userId);
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    PostStore.emptyPosts(newProps.params.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    return (
      <div className="timeline-container group">
        <div className="timeline-right-side">
          <PostForm userId={this.props.params.userId}/>
          <ul className="timeline-index-list">
            {this.state.posts.map( function (post, i) {
              return (
                <li key={i} className="timeline-index-item">
                  <h1 className="timeline-index-item-header">
                    <div>{post.poster_name}</div>
                    <span>{post.date_and_time}</span>
                  </h1>
                  <div className="timeline-index-item-content">{post.content}</div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = ProfileTimeline;
