import React from 'react';
import { Link } from 'react-router-dom';
import MainContent from './MainContent';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainContent />
        <Nav />
      </React.Fragment>
    );
  }
}

export default App;
