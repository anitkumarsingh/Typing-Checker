import React from 'react';
import './App.css';
import Nav from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import TypingComp from './Components/Typing/Typing';

function App() {
  return (
    <div className="App">
     <Nav/>
     <TypingComp/>
     <Footer/>
    </div>
  );
}

export default App;
