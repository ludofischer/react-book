/** @jsx React.DOM */

var React = require('react');
var ProgressBar = require('./ProgressBar.jsx');

var Editor = React.createClass({
    getInitialState: function() {
        return {text: ''};
    },
    handleChange: function(event) {
        this.setState({text: event.target.value});
        
    },
    render: function() {
        var text = this.state.text;

        var wordCount = text ? text.match(/\w+/g).length : 0;
        var percentComplete = wordCount / this.props.targetWordCount * 100;

        return (<div className="form-group">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <Counter count={wordCount} />    
                <ProgressBar percentComplete={percentComplete}/>
                </div>
        );
    }
});


var Counter = React.createClass({
    render: function() {
        return (
                <div className="help-block">
                  Words: {this.props.count}
                </div>
        );
    }
});


React.renderComponent(
    <Editor targetWordCount={10}/>,
    document.getElementById('editor')
);
