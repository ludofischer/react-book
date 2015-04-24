var React = require('react');


class DigitalClock {
    componentWillMount() {
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
    }

    render() {
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
}

DigitalClock.propTypes = {
        date: React.PropTypes.instanceOf(Date)
};

module.exports = DigitalClock;
