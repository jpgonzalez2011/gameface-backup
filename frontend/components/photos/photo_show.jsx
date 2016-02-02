var React = require('react');
var CommentDisplay = require('../comments/comment_display')

var PhotoShow = React.createClass({

  doNothing: function (e) {
    e.stopPropagation();
  },
  render: function () {
    if (this.props.show) {
      return (
        <div className="photo-show-container">
          <feature onClick={this.doNothing} className="photo-show-container-display group">
            <figure className="photo-show-container-display-close">
              Close Photo
            </figure>
            <figure className="photo-show-container-display-image-holder">
              <img className="photo-show-image" src={this.props.photo.full_url}/>
            </figure>
            <figure className="photo-show-container-information-pane">
              <header className="photo-show-container-information-pane-header">
                <h1>{this.props.photo.uploader_name}</h1>
                <h2>{this.props.photo.date_and_time}</h2>
              </header>
              <ul className="photo-show-container-information-pane-comments">
                {this.props.photo.comments.map ( function (comment, i) {
                  return (
                    <CommentDisplay key={i} comment={comment}/>
                    );
                  }
                )}
              </ul>
            </figure>
          </feature>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }
});

module.exports = PhotoShow;
