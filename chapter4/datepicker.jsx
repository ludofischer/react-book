/** @jsx React.DOM */

var React = require('react');
var Pikaday = require('pikaday');


var DatePicker = React.createClass({
    propTypes: {
      firstDay: React.PropTypes.number
    },
    render: function() {
        return (<input type="text"/>);
    },

    componentDidMount: function() {
      var el = this.getDOMNode();
      var props = this.props;
      console.log(props.firstDay);
      this.picker = new Pikaday({field: el, firstDay: props.firstDay});
    },

    shouldComponentUpdate: function() {
      return false;
    },
   componentWillUnmount: function() {
      this.picker.destroy();
   }
});

React.renderComponent(<DatePicker firstDay={1}/>, document.getElementById('datePicker'));
setTimeout(function() {
  React.unmountComponentAtNode(document.getElementById('datePicker'));                                                              
}, 3000);

