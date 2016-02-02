var React = require('react'),
    PhotoShow = require('./photo_show');


var PhotoPreview = React.createClass({
  getInitialState: function () {
    return { show: false };
  },

  toggleShow: function () {
    this.setState({ show: !this.state.show});
  },

  render: function () {
    return (
      <div onClick={this.toggleShow}>
        <li key={this.props.key}>
          <img className="photo-preview" src={this.props.photo.medium_url} />
        </li>
        <PhotoShow photo={this.props.photo} show={this.state.show} />
      </div>
    );
  }
});

module.exports = PhotoPreview;
