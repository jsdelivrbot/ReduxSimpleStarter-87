import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyDxCeAF5PSBPwkre3a31OplYZK2zO5Vczc'

//create a new component which is going to produce some HTML
const App = () => {
  return <div>
  <SearchBar />
  </div>;
}
//TAKE THIS component'S GENERATED HTML and put it on the page in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
