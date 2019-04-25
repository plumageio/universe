import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
    <AppContainer>
      <Component />
    </AppContainer>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp); 
  });
}
