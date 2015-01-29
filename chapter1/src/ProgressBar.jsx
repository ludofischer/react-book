React = require('react');

module.exports = React.createClass({
   render: function() {
     var progressClass = this.props.percentComplete > 100 ? "progress-bar progress-bar-danger" : "progress-bar";
     return  (
       <div className="progress">
        <div className={progressClass} role="progressbar" aria-valuenow="this.props.percentComplete" aria-valuemin="0" aria-valuemax="100" style={{width: this.props.percentComplete + '%'}}>
          <span className="sr-only">{this.props.percentComplete}% Complete</span>
        </div>
      </div> 
     );
   }
});
