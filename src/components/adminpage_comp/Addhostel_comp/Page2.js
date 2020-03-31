// csv upload
import React from "react";
import CSVReader from "react-csv-reader";

class Page2 extends React.Component {
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
        <div>
          <h3 className="page2.1">Upload .csv file here...</h3>
        </div>
        <div className="container">
          <CSVReader
            cssClass="react-csv-input"
            label="Select file"
            onFileLoaded={this.handleupload}
          />
        </div>{" "}
        <button onClick={this.back}>Back</button>
        <button disabled={this.state.uploaded} onClick={this.saveAndContinue}>
          Save and Next
        </button>
      </div>
    );
  }
}
export default Page2;
