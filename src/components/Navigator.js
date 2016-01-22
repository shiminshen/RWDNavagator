
import React from 'react';

class Navigator extends React.Component{
  render() {
    return (
      <nav className='navigator'>
        <a id='menu-toggle' href="">
          Menu
        </a>
        <ul id='menu-list'>
          <NavButton name='Home'/>
          <NavButton name='About'/>
          <NavButton name='Contact'/>
          <NavButton name='Contact'/>
          <NavButton name='Contact'/>
        </ul>
      </nav>
    )
  }
}

class NavButton extends React.Component{
  render() {
    return (
      <li className='nav-btn'>
        <a href="#">
          {this.props.name}
        </a>
      </li>
    )
  }
}

export default Navigator;
