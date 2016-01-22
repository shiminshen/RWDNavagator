import React from 'react';
import classNames from 'classnames';

require('styles/Navigator.styl');

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
        <a id='menu-toggle' className={listClass} href="#" onClick={this.clickMenuBtn}>
          <span></span>
          <span></span>
          <span></span>
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
