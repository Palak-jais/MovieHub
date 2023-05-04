import React from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Allmovies from "./Allmovies";
import View from './View';
import Book from './Book';


function App() {
  return (


    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Allmovies/>}/>
          <Route path="view" element={<View/>}/>
          <Route path="book" element={<Book/>}/>
          
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
