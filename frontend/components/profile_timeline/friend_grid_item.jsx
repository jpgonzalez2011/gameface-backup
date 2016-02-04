var React = require('react');

var FriendGridItem = React.createClass({

  render: function () {
    var url = "#/users/" + this.props.friend.id;
    return (
      <a href={url}>
        <li className="friend-grid-item group">
          <figure className="friend-picture-container">
            <img className="friend-picture" src={this.props.friend.profile_small_url} />
          </figure>
          <h2 className="friend-grid-name">{this.props.friend.full_name}</h2>
        </li>
      </a>
    );
  }
});

module.exports = FriendGridItem;
