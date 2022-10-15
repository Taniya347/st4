// import logo from './logo.svg';
import React from 'react';
import About from './component/About';
import Contect from './component/Contect';
import Feature from './component/Feature';
import Header from './component/home';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <About />
      <Contect />
    
    </div>
  );
}

export default App;
