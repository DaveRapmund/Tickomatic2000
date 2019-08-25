import React from 'react';

function UserInput(props){
  return(
    <div className="row input-row">
      <div className="col text-center">
        <input
          className="user-input"
          type="text"
          name="user-input"
          autoComplete="off"
          autoFocus="autofocus"
          placeholder="Begin typing to start timer.."
          onChange={props.onInputChange}
          onKeyUp={props.checkInput}
        />
      </div>
    </div>
  )
}

export default UserInput;
