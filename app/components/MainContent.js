import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Interaction from './Interaction';
import ArtistResult from './ArtistResult';

class MainContent extends React.Component {
  render() {
      return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Interaction} exact />
        <Route path="/about" component={About} exact />
        <Route path="/:styleName" component={ArtistResult} exact />
      </Switch>
    </React.Fragment>
  );
}
}

export default MainContent;
