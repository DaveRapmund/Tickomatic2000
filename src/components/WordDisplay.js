import React, { Component } from 'react';
import $ from 'jquery';
import { CSSTransition } from 'react-transition-group';

import Modal from './Modal';
import UserInput from './UserInput';
import SelectionBox from './SelectionBox';
import WordBox from './WordBox';

import { WordLists } from '../js/data';

class WordDisplay extends Component{

  constructor(){
    super();
    this.state = {
      isStarted: false,
      currentWordList: [],
      correctAnswers: 0,
      userInput: "",
      isFinished: false,
      startTime: null,
      endTime: null,
      totalTime: 0,
      wordsPerSecond: 0,
      wordsPerMinute: 0
    }
  }

  onSelectionChange = (e) => {
    if(e.target.value !== ""){
      this.setState({
        'currentWordList': WordLists[e.target.value],
        'correctAnswers': 0
      });
      $('.user-input').focus();
    }
  }

  onInputChange = (e) => {
    this.setState({userInput: e.target.value});
    if(!this.state.isStarted){
      const startTime = new Date();
      this.setState({'isStarted': true, 'startTime' : startTime.getTime()});
    }
  }

  checkInput = (e) => {
    if(this.state.userInput === this.state.currentWordList[this.state.correctAnswers]){
      this.setState(prevState => { correctAnswers: prevState.correctAnswers++ }, this.checkIfLastWord(e));
      $(e.target).val("");
    }
  }

  checkIfLastWord = (e) => {
    this.onInputChange(e);
    if(this.state.correctAnswers === (this.state.currentWordList.length - 1)){
      const endTime = new Date();
      $(e.target).prop('disabled', true);
      this.setState({
        'isFinished' : true,
        'endTime': endTime.getTime(),
        'isStarted' : false
      }, () => this.calculateTime());
    }
  }

  calculateTime = () => {
    const totalTimeInSeconds = (this.state.endTime - this.state.startTime) / 1000;
    const totalTimeInSecondsClean = totalTimeInSeconds.toFixed(1);
    const totalWordsPerSecond = (this.state.currentWordList.length / totalTimeInSecondsClean).toFixed(1);
    const totalWordsPerMinute = (totalWordsPerSecond * 60).toFixed(1);
    this.setState({
      'wordsPerSecond' : totalWordsPerSecond,
      'wordsPerMinute' : totalWordsPerMinute,
      'totalTime' : totalTimeInSecondsClean
    })
    $('.custom-modal').css({
      'opacity': '1',
      'visibility': 'visible'
    })
  }

  resetIndex = () => {
    this.setState({'correctAnswers' : 0});
  }

  render(){
    return(
      <div>
        <Modal
          perSecond={this.state.wordsPerSecond}
          perMinute={this.state.wordsPerMinute}
          totalWords={this.state.currentWordList.length}
          totalTime={this.state.totalTime}
          resetIndex={this.resetIndex}
        />
          <CSSTransition
            appear={true}
            in={true}
            timeout={700}
            classNames="st"
          >
            <SelectionBox onSelectionChange={this.onSelectionChange} />
          </CSSTransition>
          <CSSTransition
            appear={true}
            in={true}
            timeout={1000}
            classNames="wt"
          >
            <WordBox currentWord={this.state.currentWordList[this.state.correctAnswers]} answers={this.state.correctAnswers} />
          </CSSTransition>
          <CSSTransition
            appear={true}
            in={true}
            timeout={1300}
            classNames="ut"
          >
            <UserInput onInputChange={this.onInputChange} checkInput={this.checkInput} />
          </CSSTransition>
      </div>
    )
  }
}

export default WordDisplay;
