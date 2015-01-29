var React = require('react');
var Analog = require('./ClockFace.jsx');
var DigitalClock = require('./Digital.jsx');

var range = require('lodash.range');

var Clock = React.createClass({
  getInitialState: function() {
    return {date: new Date()};
  },
  
  componentDidMount: function() {
    var component = this;
    setInterval(function() {
      component.setState({date: new Date()});
    }, 1000);
  },
  
  render: function() {
    return (<div>
      <Analog major={range(12)} minor={range(12)} date={this.state.date}/>
      <DigitalClock date={this.state.date}/>
    </div>);
  }
});


module.exports = Clock;
