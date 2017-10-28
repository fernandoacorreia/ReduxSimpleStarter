import React from 'react';
import ReactDOM from 'react-dom';

// Component that produces some HTML.
const App = function() {
  return <div>Hi!</div>;
}

// Adds component's generated HTML to the page's DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
