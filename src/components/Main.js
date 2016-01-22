require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigator from './Navigator.js';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navigator/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
