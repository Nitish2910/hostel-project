//  hostel details....
import React from "react";
import CheckError from "./errorCheck";

class Page1 extends React.Component {
  state = {
    error: "",
    errormsg: ""
  };

  saveAndContinue = (e) => {
    if (!this.state.error) {
      e.preventDefault();
      this.props.nextStep();
    } else {
      this.setState(() => ({ errormsg: this.state.error, error: "" }));
      e.preventDefault();
      this.props.currentStep();
    }
  };
  // handleChange = (input) => (event) => {
  //   this.setState({ [input]: event.target.value });
  // };

  render() {
    const { values } = this.props;
    const error1 = this.state.error;
    return (
      <div>
        <h1 className="heading111">Add New Hostel</h1>
        {this.state.errormsg ? <p>{this.state.errormsg}</p> : ""}
        <form
          onSubmit={
            ((
              <CheckError
                handicappedRoomrange={values.handicappedRoomrange}
                roomRange={values.roomRange}
                error={error1}
                // handleChange={this.handleChange}
              />
            ),
            this.saveAndContinue)
          }
        >
          <h4>Enter Hostel Details</h4>
          <p>Hostel Name</p>
          <input
            type="text"
            placeholder="hostel name"
            onChange={this.props.handleChange("hostelName")}
            defaultValue={values.hostelName}
            required={true}
          />{" "}
          <p>Each room capacity</p>
          <select
            onChange={this.props.handleChange("roomCapacity")}
            defaultValue={values.roomCapacity}
          >
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
            <option value="6">6 persons</option>
          </select>
          <p>Rooms Range(eg. (G1-G8),(F1-F10),(F12-F30))</p>
          <input
            placeholder="rooms range"
            onChange={this.props.handleChange("roomRange")}
            defaultValue={values.roomRange}
            required={true}
          />
          <p>Rooms range for physically disabled</p>
          <input
            placeholder="rooms range"
            onChange={this.props.handleChange("handicappedRoomrange")}
            defaultValue={values.handicappedRoomrange}
            required={true}
          />
          <p>Wrap Around</p>
          <label>
            <input
              type="radio"
              name="wrap"
              value="yes"
              onChange={this.props.handleChange("wrap")}
              required={true}
            />
            Yes
          </label>
          <span> </span>
          <label>
            <input
              type="radio"
              name="wrap"
              value="no"
              onChange={this.props.handleChange("wrap")}
              required={true}
            />
            No
          </label>
          <p>
            <input type="submit" name="submit" value="Save and Next" />
          </p>
        </form>
      </div>
    );
  }
}

export default Page1;
