React = require('react');

var SaveButton = React.createClass({
    getInitialState: function() {
        return {success: false};
    },
    save: function() {
        this.setState({success: true});
    },
    render: function() {
            var classString = this.state.success ? "alert alert-dismissible alert-success" : "alert alert-dismissible alert-success hidden";
        return (
            <div>
                <div className={classString} role="alert">
                <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <strong>Success!</strong> Text succesfully saved.
                </div>
                {this.props.children}
                <button type="button" className="btn btn-primary" onClick={this.save}> 
                Save
                </button>
                </div>
               )
    }
});

module.exports = SaveButton;
