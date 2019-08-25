import React, { Component } from 'react';
import Heading from './Heading';
import Background from './Background';
import WordDisplay from './WordDisplay';
import { CSSTransition } from 'react-transition-group';

class App extends Component{
  render(){
    return(
      <div className="container">
        <Background />
        <CSSTransition
          in={true}
          appear={true}
          classNames="ht"
          timeout={700}
        >
          <Heading />
        </CSSTransition>
        <WordDisplay />
      </div>
    )
  }
}

export default App;
