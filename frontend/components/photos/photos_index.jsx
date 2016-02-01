var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoForm = require('./photo_form');

var _photoForm;

var PhotosIndex = React.createClass({
  getInitialState: function () {
    return (this.getStateFromStore(this.props));
  },

  getStateFromStore: function (props) {
    this.checkForOwner();
    return ( { photos: PhotoStore.findByOwner(props.params.userId) });
  },

  componentDidMount: function () {
    this.storeCBToken = PhotoStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    // PhotoStore.emptyPhotos(this.props.params.userId);
    this.storeCBToken.remove();
  },

  componentWillMount: function() {
    PhotoStore.emptyPhotos(this.props.params.userId);
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    PhotoStore.emptyPhotos(newProps.params.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  checkForOwner: function () {
    if (CurrentUserStore.currentUser().id == this.props.params.userId) {
      _photoForm = <PhotoForm />;
    } else {
      _photoForm = "";
    }
  },

  render: function () {
    if (this.state.photos === "loading") {
      return (
        <div className="photo-index-container group">
          <h1 className="photos-header"> PHOTOS </h1>
          <h1> Now loading... </h1>
        </div>
      );
    }
    if (this.state.photos[0] === "no photos") {
      return (
        <div className="photo-index-container group">
          <h1 className="photos-header"> PHOTOS </h1>
          {_photoForm}
          <h1> No Photos yet! </h1>
        </div>
      );
    } else {
      return (
        <div className="photo-index-container group">
          {_photoForm}
          <ul className="photo-index-list group">
            {this.state.photos.map( function (photo, i) {
              return (
                <li key={i}>
                  <img className="photo-preview" src={photo.medium_size_url} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
});

module.exports = PhotosIndex;
