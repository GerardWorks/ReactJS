import React from 'react';
import ReactDOM from 'react-dom';
import BabelTransformer from './components/babel-transformer.jsx';

console.log(BabelTransformer);
ReactDOM.render(
  <BabelTransformer />,
  document.getElementById('app')
)
