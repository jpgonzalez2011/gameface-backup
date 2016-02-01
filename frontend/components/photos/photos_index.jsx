var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoForm = require('./photo_form');

var _photoForm;

var PhotosIndex = React.createClass({
  getInitialState: function () {
    return ( { photos: [], initial_render: true } );
  },

  getStateFromStore: function (props) {
    this.checkForOwner();
    return ( { photos: PhotoStore.findByOwner(props.params.userId), initial_render: false });
  },

  componentWillMount: function() {
    this.getStateFromStore(this.props);
  },

  componentDidMount: function () {
    this.storeCBToken = PhotoStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    PhotoStore.emptyPhotos(newProps.params.userId);
    // this.setState({ photos: [] });
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
    if (this.state.initial_render) {
      return (
        <div>

        </div>
      );
    }
    if (this.state.photos.length === 0) {
      return (
        <div className="photo-index-container group">
          <h1 className="photos-header"> PHOTOS </h1>
          {_photoForm}
          <h1> No Photos yet! </h1>
        </div>
      );
    }
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
});

module.exports = PhotosIndex;
