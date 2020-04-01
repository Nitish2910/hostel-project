import React from "react";
import Addhostel from "./adminpage_comp/Addhostel";
import Currenthostel from "./adminpage_comp/Currenthostel";
import Upcomingevents from "./adminpage_comp/Upcominghostel";
import AdminInfo from "./adminpage_comp/AdminInfo";

class Adminpage extends React.Component {
  state = {
    admininfo: true,
    addhostel: false,
    currenthostel: false,
    upcominghostel: false
  };
  admininfo = () => {
    this.setState(() => ({
      admininfo: true,
      addhostel: false,
      currenthostel: false,
      upcominghostel: false
    }));
  };
  add = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: true,
      currenthostel: false,
      upcominghostel: false
    }));
  };
  current = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: true,
      upcominghostel: false
    }));
  };
  upcoming = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: false,
      upcominghostel: true
    }));
  };
  render() {
    return (
      <div>
        <div className="flex-container0">
          <div className="flex-container1">
            <button
              className={this.state.admininfo ? "buttonactive" : "flexdiv"}
              onClick={this.admininfo}
            >
              Admin Info
            </button>
            <button
              className={this.state.addhostel ? "buttonactive" : "flexdiv"}
              onClick={this.add}
            >
              Add new hostel
            </button>
            <button
              className={this.state.currenthostel ? "buttonactive" : "flexdiv"}
              onClick={this.current}
            >
              Current hostels
            </button>
            <button
              className={this.state.upcominghostel ? "buttonactive" : "flexdiv"}
              onClick={this.upcoming}
            >
              Upcoming allotments
            </button>
          </div>
          <div className="flex2">
            <h1 className="allheadings">Admin Workspace</h1>
            <div className="admindiv">
              {(this.state.admininfo && <AdminInfo />) ||
                (this.state.addhostel && <Addhostel />) ||
                (this.state.currenthostel && <Currenthostel />) ||
                (this.state.upcominghostel && <Upcomingevents />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminpage;
