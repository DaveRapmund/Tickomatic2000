import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Background(){
  return(
    <div className="background d-none d-lg-block">
      <TransitionGroup>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="ls"
        >
          <div className="left-stripe"></div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1100}
          classNames="rs"
        >
          <div className="right-stripe"></div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Background;
