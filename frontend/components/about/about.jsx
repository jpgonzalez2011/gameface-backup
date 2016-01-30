var React = require('react'),
    AboutStore = require('../../stores/about_store');

var About = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
  },

  getStateFromStore: function (props) {
    return ( { aboutInfo: AboutStore.findByUserId(props.params.userId) } );
  },

  componentDidMount: function () {
    this.storeCBToken = AboutStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnMount: function () {
    this.storeCBToken.remove();
  },

  componentWillMount: function () {
    AboutStore.emptyAboutInfo(this.props.params.userId);
  },

  render: function () {
    if (typeof this.state.aboutInfo === "undefined") {
      return (
        <div className="about-container group">
          rendering...
        </div>
      );
    } else {
        return (
          <div className="about-container group">
            <ul className="about-list group">
              <li group>
                Full Name: {this.state.aboutInfo.fname} {this.state.aboutInfo.lname}
              </li>
              <li>
                Occupation {this.state.aboutInfo.occupation}
              </li>
            </ul>
          </div>
        );
      }
    }
});

module.exports = About;
