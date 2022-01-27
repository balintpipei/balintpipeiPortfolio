
import React from 'react';
import './App.css';



//import react component
import Main from './Component/Main';
import Projects from './Component/Projects';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Main />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    )
  }
}

export default App;
