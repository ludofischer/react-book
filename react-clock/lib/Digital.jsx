var React = require('react');


var DigitalClock = React.createClass({
    propTypes: {
        date: React.PropTypes.instanceOf(Date)
    },

    componentWillMount: function() {
        this.dateFormat = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        this.timeFormat = new Intl.DateTimeFormat('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    },

    render: function() {

        return (
            <div className="left">
                <p>
                    Today is {this.dateFormat.format(this.props.date)}.
                    The time is:
                </p>
                <span className="time">
                    {this.timeFormat.format(this.props.date)}
                </span>
            </div>
        );
    }
});

module.exports = DigitalClock;
