import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div2 = document.createElement('div');
  ReactDOM.render(<App />, div2);
  ReactDOM.unmountComponentAtNode(div2);
});
