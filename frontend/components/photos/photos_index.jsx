var React = require('react'),
    PhotoStore = require('../../stores/photo_store');


var PhotosIndex = React.createClass({
  getInitialState: function () {
    return ({ photos: [] });
  },

  getStateFromStore: function (userId) {
    return ( { photos: PhotoStore.findByOwner(this.props.params.userId) });
  },

  componentDidMount: function () {
    debugger
    this.storeCBToken = PhotoStore.addListener( function () {
      this.setState(this.getStateFromStore);
    }.bind(this));
    PhotoStore.findByOwner();
  },

  render: function () {
    if (this.state.photos.length === 0) {
      return (
        <div>
          <h1> No photos! =( </h1>
        </div>
      );
    } else {
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
  }
});

module.exports = PhotosIndex;
