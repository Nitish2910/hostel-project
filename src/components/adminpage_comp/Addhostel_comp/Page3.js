//date filling
import React from "react";
class Page3 extends React.Component {
  state = {
    uploaded: true
  };
  handleupload = (e) => {
    this.setState(() => ({ uploaded: false }));
  };
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div>
        <h1 className="heading111">Add New Hostel</h1>
        <p>
          Provide the Date for allotment and final submit for processing.....
        </p>

        <form onSubmit={this.saveAndContinue}>
          <input className="page3" type="date" name="date" required={true} />
          <p>
            <button onClick={this.back}>Back</button>
            <input type="submit" value="Final Submit" />
          </p>
        </form>
      </div>
    );
  }
}
export default Page3;
