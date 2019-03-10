import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// So this is full dom rendering, which could cause conflicts in test cases

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
