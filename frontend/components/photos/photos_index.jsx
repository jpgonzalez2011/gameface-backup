var React = require('react'),
    PhotoStore = require('../../stores/photo_store');


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

  render: function () {
    return (
      <div>
        <ul>
          {this.state.photos.map( function (photo, i) {
            return (
              <li key={i}> <img src={photo} /> </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = PhotosIndex;
