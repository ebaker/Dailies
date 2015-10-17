var React = require('react');

// overall app component
var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function(){
    console.log('componentDidMount', this);
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount', this);
  },
  render: function() {
    var names = ['joe', 'jim', 'bob', 'dog'];

    // controls set here, using Board component
    return (
      <div>
        <h1>App</h1>
        <div className='subtitle'>app subtitle idk</div>
        <Container props={names} />
      </div>
    );
  }
});

// Board component
var Container = React.createClass({
  render: function() {
    var i, nameItems = [];
    for (i = 0; i < this.props.names.length; i++){
      nameItems.push(
        <li>{this.props.names[i]}</li>
      );
    }
    return <ul className='names'>{nameItems}</ul>;
  }
});