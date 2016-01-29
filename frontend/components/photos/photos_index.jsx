var React = require('react'),
    PhotoStore = require('../../stores/photo_store');


var PhotosIndex = React.createClass({
  getInitialState: function () {
    return ({ photos: PhotoStore.findByOwner(this.props.params.userId) });
  },

  getStateFromStore: function (userId) {
    return ( { photos: PhotoStore.findByOwner(this.props.params.userId) });
  },

  componentDidMount: function () {
    this.storeCBToken = PhotoStore.addListener( function () {
      this.setState(this.getStateFromStore);
    }.bind(this));
  },

  render: function () {
    return (
      <div className="photo-index-container group">
        <ul className="photo-index-list group">
          {this.state.photos.map( function (photo, i) {
            return (
              <li key={i}> <img className="photo-preview" src={photo.image} /> </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = PhotosIndex;
