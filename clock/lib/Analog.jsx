var React = require('react');

class ClockFace {
    render() {
        var minorLength = this.props.minor.length;
        var majorLength = this.props.major.length;
        var date = this.props.date;

        return (
            <div className='clock'>
                <div className='square'>
                    <svg viewBox='0 0 100 100'>

                        {/* first create a group and move it to 50,50 so                                     all co-ords are relative to the center */}
                        <g transform='translate(50,50)'>
                            <circle className='clock-face' r='48'/>

                            {/* markers every minute (major markers every 5 minutes) */}
                            {
                             this.props.minor.map(function (i) {
                                 var key = 'minor-' + i;
                                 return (
                                     <line key={key} className='minor' y1='42' y2='45' transform={'rotate(' + (360 * i / minorLength) + ')'}/>
                                 );
                             })
                             }

                                     {
                                      this.props.major.map(function(i) {
                                          var key = 'major-' + i;
                                          return (
                                              <line key={key} className='major' y1='35' y2='45' transform={'rotate(' + (360 * i / majorLength) + ')'}/>
                                          );
                                      })
                                      }

                                              {/* hour hand */}
                                              <line className='hour' y1='2' y2='-20' transform={'rotate(' +
                                                    (30 * date.getHours() + date.getMinutes() / 2) + ')'}/>

                                              {/* minute hand */}
                                              <line className='minute' y1='4' y2='-30' transform={'rotate(' +
                                                    (6 * date.getMinutes() + date.getSeconds() / 10) + ')'}/>

                                              {/* second hand */}
                                              <g transform={'rotate(' + (6 * date.getSeconds()) + ')'}>
                                                  <line className='second' y1='10' y2='-38'/>
                                                  <line className='second-counterweight' y1='10' y2='2'/>
                                              </g>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

ClockFace.propTypes = {
    date: React.PropTypes.instanceOf(Date),
    minor: React.PropTypes.array,
    major: React.PropTypes.array
};

module.exports = ClockFace;
