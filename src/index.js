import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDNTwbEWygLVwFodgz4mBFGrM8HXS-4W2A';

// Component that produces some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Adds component's generated HTML to the page's DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
