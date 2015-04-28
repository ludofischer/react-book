var React = require('react');
var Analog = require('./Analog.jsx');
var DigitalClock = require('./Digital.jsx');

var range = require('lodash.range');

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        var component = this;
        setInterval(function() {
            component.setState({date: new Date()});
        }, 1000);
    }

    render() {
        return (<div>
    <Analog major={range(12)} minor={range(12)} date={this.state.date}/>
    <DigitalClock date={this.state.date}/>
        </div>);
    }
}


module.exports = Clock;
