var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoForm = require('./photo_form');

var _photoForm;

var PhotosIndex = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
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
    this.storeCBToken.remove();
  },

  checkForOwner: function () {
    if (CurrentUserStore.currentUser().id == this.props.params.userId) {
      _photoForm = <PhotoForm />;
    } else {
      _photoForm = "";
    }
  },

  render: function () {
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
