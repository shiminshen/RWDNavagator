import React from 'react';
import classNames from 'classnames';

var Navigator = React.createClass({

  getInitialState: function() {
    return {menuDisplay: false};
  },

  clickMenuBtn: function() {
    this.setState({menuDisplay: !this.state.menuDisplay});
  },

  render: function() {

    var listClass = classNames({
      'open': this.state.menuDisplay
    });

    return (
      <nav className='navigator'>
        <a id='menu-toggle' href="#" onClick={this.clickMenuBtn}>
          Menu
        </a>
        <ul id='menu-list' className={listClass}>
          <NavButton name='Home'/>
          <NavButton name='About'/>
          <NavButton name='Contact'/>
        </ul>
      </nav>
    )
  }
});

var NavButton = React.createClass({
  render: function() {
    return (
      <li className='nav-btn'>
        <a href="#">
          {this.props.name}
        </a>
      </li>
    )
  }
});

export default Navigator;
