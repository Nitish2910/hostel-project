// csv upload
import React from "react";
import axios from "axios";
import validateCSV from "./csvFileValidation";

class Page2 extends React.Component {
  state = {
    inValidMessages: [],
    error: "",
    uploading: false,
  };
  handleupload = async (e) => {
    {
      this.setState(() => ({ uploading: true }));
    }
    e.preventDefault();
    e.persist();
    if (!e.target.elements.csvData.files[0]) return;
    const csvData = await validateCSV(e.target.elements.csvData.files[0]);
    console.log(csvData.data);
    console.log(csvData.inValidMessages);
    try {
      if (csvData.inValidMessages.length > 0) {
        throw new Error();
      }
      this.setState(() => ({ inValidMessages: [] }));
      //console.log(this.props.id);

      //uploading the csv to server
      const url = `https://hostel-allotment-api.herokuapp.com/admin/${this.props.id}/upload`;
      const config = {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("userData")).token,
          "Content-Type": "multipart/form-data",
        },
      };
      const data = new FormData();
      data.append("upload", e.target.elements.csvData.files[0]);
      await axios.post(url, data, config);
      this.props.upload();
      this.setState(() => ({ inValidMessages: [], error: "" }));
    } catch (e) {
      let msg = [];
      let er = "";
      if (csvData.inValidMessages.length > 0) {
        msg = csvData.inValidMessages;
      } else if (e.response) {
        if (e.response.status >= 400 && e.response.status < 500) {
          er = "validation failed";
        } else {
          er = "Please Try Again Later";
        }
      } else {
        er = "Please Try Again Later";
      }

      this.setState(() => ({
        inValidMessages: msg,
        error: er,
        uploading: false,
      }));
    }
    {
      this.setState(() => ({ uploading: false }));
    }
  };
  render() {
    return (
      <div>
        {this.props.newUser ? (
          <h1 className="heading111">Add New Hostel</h1>
        ) : (
          <h1 className="heading111">Update Hostel Details</h1>
        )}
        <div>
          <h3 className="page2.1">Upload .csv file here...</h3>
        </div>
        {this.state.error && <p className="errorshow">{this.state.error}</p>}
        <div className="overflowcontrol">
          <div className="widthsetting">
            {" "}
            <p>
              Column Headers in the file to be uploaded must be in the form as:
              <br /> <b>rollNo</b>,<b>Email</b>,<b>Name</b>,<b>Rank</b>,
              <b>Disable</b>
            </p>
            {this.props.uploaded && !this.state.uploading && (
              <p className="updated-status">You have uploaded the CSV File.</p>
            )}
            {this.state.inValidMessages.length > 0 &&
              this.state.inValidMessages.map((msg, index) => (
                <h3 className="errorshow" key={index}>
                  {msg}
                </h3>
              ))}
            <form className="container" onSubmit={this.handleupload}>
              <div className="uploadflex">
                <input
                  className="choosefile"
                  type="file"
                  name="csvData"
                  accept=".csv"
                />
                <input
                  disabled={this.state.uploading}
                  className="uploadfile"
                  type="submit"
                  value={!this.state.uploading ? "Upload" : "Uploading"}
                />
              </div>
            </form>{" "}
            <button className="csvbuttons" onClick={this.props.prevStep}>
              Back
            </button>
            <button
              className={
                this.props.uploaded ? "csvbuttons" : "csvdisabledbutton"
              }
              disabled={!this.props.uploaded}
              onClick={this.props.nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Page2;
