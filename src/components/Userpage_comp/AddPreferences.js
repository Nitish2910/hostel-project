import React from "react";
import Option from "./Addpreferences2";

export default class AddPrefernces extends React.Component {
  state = {
    floors: ["F", "G", "S"],
    fill: [],
    rooms: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    errormessage: ""
  };
  checkPrevRoom = (room) => {
    for (let i = 0; i < this.state.fill.length; i++) {
      if (room === this.state.fill[i]) {
        return false;
      }
    }
    return true;
  };

  handleDeleteOption = (removeOption) => {
    this.setState((prevState) => ({
      fill: prevState.fill.filter((option) => option !== removeOption)
    }));
  };

  upUtil = (prevState, upOption) => {
    for (let i = 1; i < prevState.fill.length; i++) {
      if (prevState.fill[i] === upOption) {
        let temp = prevState.fill[i - 1];
        prevState.fill[i - 1] = upOption;
        prevState.fill[i] = temp;
      }
    }
    return prevState.fill;
  };

  downUtil = (prevState, downOption) => {
    for (let i = 0; i < prevState.fill.length - 1; i++) {
      if (prevState.fill[i] === downOption) {
        let temp = prevState.fill[i + 1];
        prevState.fill[i + 1] = downOption;
        prevState.fill[i] = temp;
      }
    }
    return prevState.fill;
  };

  handleUpOption = (upOption) => {
    this.setState((prevState) => ({
      fill: this.upUtil(prevState, upOption)
    }));
  };

  handleDownOption = (downOption) => {
    this.setState((prevState) => ({
      fill: this.downUtil(prevState, downOption)
    }));
  };

  sendData = () => {
    console.log("send data");
    //send all the data by this function
    //<Redirect to="/" />
  };

  handleAddRoom = (e) => {
    e.preventDefault();
    const room = e.target.elements.floorName.value;
    const room_no = e.target.elements.room__no.value;
    const fillup = room + "-" + room_no;
    // console.log(room);
    // console.log(room_no);
    if (this.checkPrevRoom(fillup)) {
      this.setState((prevState) => ({
        fill: prevState.fill.concat(fillup),
        errormessage: ""
      }));
    } else {
      // console.log("this is also present");
      this.setState(() => ({
        errormessage: "this is already present"
      }));
    }
  };
  render() {
    return (
      <div>
        <div>
          <h2>You selected your preference by selected list</h2>
          <hr />
        </div>
        <form onSubmit={this.handleAddRoom}>
          {this.state.floors.length !== 0 && (
            <select name="floorName">
              {this.state.floors.map((floor) => (
                <option key={floor}>{floor}</option>
              ))}
              ;
            </select>
          )}
          {this.state.rooms.length !== 0 && (
            <select name="room__no">
              {this.state.rooms.map((room_no) => (
                <option key={room_no}>{room_no}</option>
              ))}
              ;
            </select>
          )}
          <input type="submit" name="submit" value="Add room" />
        </form>
        <button onClick={this.sendData}>Save&Submit</button>
        {this.state.errormessage && (
          <p className="errorshow">{this.state.errormessage}</p>
        )}
        {this.state.fill.length !== 0 && (
          <div>
            <p>Your selected room is</p>
            <hr />
          </div>
        )}
        {this.state.fill.length !== 0 && (
          <span>
            {this.state.fill.map((room, index, arr) => (
              <Option
                arr={arr}
                key={room}
                roomText={room}
                count={index + 1}
                handleDeleteOption={this.handleDeleteOption}
                handleUpOption={this.handleUpOption}
                handleDownOption={this.handleDownOption}
              />
            ))}
          </span>
        )}
      </div>
    );
  }
}
