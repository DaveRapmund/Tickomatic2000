import React from 'react';

function SelectionBox(props){
  return(
    <div className="row mb-5">
      <div className="col text-center">
        <select className="selection-box" onChange={props.onSelectionChange}>
          <option value="" defaultValue>Pick a wordlist..</option>
          <option value="Nederlands">Nederlands</option>
          <option value="English">English</option>
        </select>
      </div>
    </div>
  )
}

export default SelectionBox;
