var React = require('react');

var Counter = function() {};
Counter.prototype.render = function() {
   return (
            <div className="help-block">
               Words: {this.props.count}
             </div>
      );
};

module.exports = Counter;
