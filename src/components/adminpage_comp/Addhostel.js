import React from "react";
import Page1 from "./Addhostel_comp/Page1";
import Page2 from "./Addhostel_comp/Page2";
import Page3 from "./Addhostel_comp/Page3";
import Page4 from "./Addhostel_comp/Page4";

class Addhostel extends React.Component {
  state = {
    step: 1,
    hostelName: "",
    roomCapacity: "1",
    roomRange: "",
    handicappedRoomrange: "",
    wrap: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  currentStep = () => {
    const { step } = this.state;
    this.setState({
      step: step
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
    console.log("Room capacity is.", this.state.roomCapacity);
    console.log("Wrap is.", this.state.wrap);
    console.log("Room range is.", this.state.roomRange);
  };

  render() {
    const { step } = this.state;
    const {
      hostelName,
      roomCapacity,
      roomRange,
      handicappedRoomrange,

      wrap
    } = this.state;
    const values = {
      hostelName,
      roomCapacity,
      roomRange,
      handicappedRoomrange,

      wrap
    };
    switch (step) {
      case 1:
        return (
          <Page1
            nextStep={this.nextStep}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Page2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Page3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Page4 />;
    }
  }
}
export default Addhostel;
