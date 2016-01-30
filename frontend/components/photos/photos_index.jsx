var React = require('react'),
    PhotoStore = require('../../stores/photo_store'),
    PhotoForm = require('./photo_form');


var PhotosIndex = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
  },

  getStateFromStore: function (props) {
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

  render: function () {
    return (
      <div className="photo-index-container group">
        <PhotoForm />
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
