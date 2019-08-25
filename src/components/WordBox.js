import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function WordBox(props){
  return(
    <div className="row mb-5">
      <div className="col-12">
        <div className="wordbox">
        <TransitionGroup>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="wdt"
          key={props.answers}
        >
          <h1>{props.currentWord}</h1>
        </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
    </div>
  )
}

export default WordBox;
