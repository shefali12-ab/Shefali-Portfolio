import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Middle from './Components/middleSection/middle';
import About from './Components/About/About'
import Project from './Components/Project/project'
import Footer from './Components/Footer/footer'
ReactDOM.render(
  <React.StrictMode>
  
   <Header />
    <Middle />
    <About />
    
    <Footer />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


