import React from "react";

const Option = (props) => (
  <div>
    <span>
      {props.count}.{props.roomText}
    </span>
    <span>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.roomText);
        }}
      >
        x
      </button>
    </span>
    <span>
      <button
        disabled={props.count == 1 ? true : false}
        onClick={(e) => {
          props.handleUpOption(props.roomText);
        }}
      >
        up
      </button>
    </span>
    <span>
      <button
        disabled={props.count == props.arr.length ? true : false}
        onClick={(e) => {
          props.handleDownOption(props.roomText);
        }}
      >
        down
      </button>
    </span>
  </div>
);

export default Option;
