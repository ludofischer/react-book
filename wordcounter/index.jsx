var React = require('react');
var ProgressBar = require('./lib/ProgressBar.jsx');
var Counter = require('./lib/Counter.jsx');

var Editor = function() {
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
};

Editor.prototype = Object.create(React.Component.prototype);

Editor.prototype.handleChange = function(event) {
    this.setState({text: event.target.value});
};

Editor.prototype.render = function() {
  var text = this.state.text;

  var wordCount = text ? text.match(/\w+/g).length : 0;
  var percentComplete = wordCount / this.props.targetWordCount * 100;


  return (<div className="form-group">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <Counter count={wordCount} />
                <p>{wordCount}</p>
                <ProgressBar percentComplete={percentComplete}/>
                </div>
        );
    };

React.render(
    <Editor targetWordCount={10}/>,
    document.getElementById('editor')
);
