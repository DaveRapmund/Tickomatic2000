import React, { Component } from 'react';
import $ from 'jquery';


class Modal extends Component{

  removeModal = () => {
    $('.custom-modal').css({'opacity': '0', 'visibility': 'hidden'});
    $('.user-input').prop('disabled', false);
    this.props.resetIndex();
  }

  render(){
    return(
      <div className="custom-modal">
        <div className="custom-modal-container text-center pt-4 pr-5 pl-5">
          <h2 className="mt-3">Done!</h2>
          <p className="mt-5 mb-5">You typed {this.props.totalWords} words in {this.props.totalTime} seconds
            which comes down to <b>{this.props.perSecond} words per second</b>,
            or <b>{this.props.perMinute}</b> words per minute!
          </p>
          <button className="btn btn-success" onClick={this.removeModal}>Sweet!</button>
        </div>
      </div>

    )
  }
}

export default Modal;
