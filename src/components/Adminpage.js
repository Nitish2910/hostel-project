import React from "react";
import Addhostel from "./adminpage_comp/Addhostel";
import Currenthostel from "./adminpage_comp/Currenthostel";
import Upcomingevents from "./adminpage_comp/Upcominghostel";
import AdminInfo from "./adminpage_comp/AdminInfo";
import ShowUsers from "./showUsers/ShowUsers";

class Adminpage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  state = {
    admininfo: true,
    addhostel: false,
    currenthostel: false,
    upcominghostel: false,
    edithostel: false,
    showUsers: false,
    sidebox: false,
    burger: true,
    popupVisible: false,
  };
  //start burger
  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  //end burger
  admininfo = () => {
    this.setState(() => ({
      admininfo: true,
      addhostel: false,
      currenthostel: false,
      upcominghostel: false,
      edithostel: false,
      showUsers: false,
    }));
  };
  add = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: true,
      currenthostel: false,
      upcominghostel: false,
      edithostel: false,
      showUsers: false,
      hostelDetail: null,
    }));
  };
  current = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: true,
      upcominghostel: false,
      edithostel: false,
      showUsers: false,
    }));
  };
  upcoming = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: false,
      upcominghostel: true,
      edithostel: false,
      showUsers: false,
    }));
  };
  edithostel = (hostelDetail) => {
    //console.log("from edithostel function");
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: true,
      upcominghostel: false,
      edithostel: true,
      showUsers: false,
      hostelDetail: hostelDetail,
    }));
  };
  showUsers = (hostelDetail) => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: true,
      upcominghostel: false,
      edithostel: false,
      showUsers: true,
      hostelDetail: hostelDetail,
    }));
  };
  closeUsers = () => {
    this.setState(() => ({
      admininfo: false,
      addhostel: false,
      currenthostel: true,
      upcominghostel: false,
      edithostel: false,
      showUsers: false,
    }));
  };
  burgerclick = () => {
    this.setState(() => ({
      sidebox: true,
      burger: false,
    }));
  };
  render() {
    return (
      <div>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          {" "}
          {this.state.popupVisible && (
            <div
              className="flex-container1"
              ref={(node) => {
                this.node = node;
              }}
            >
              <button
                className={this.state.admininfo ? "buttonactive" : "flexdiv"}
                onClick={this.admininfo}
                ref={(node) => {
                  this.node = node;
                }}
              >
                Admin Info
              </button>
              <button
                className={this.state.addhostel ? "buttonactive" : "flexdiv"}
                onClick={this.add}
                ref={(node) => {
                  this.node = node;
                }}
              >
                Add New Hostel
              </button>
              <button
                className={
                  this.state.currenthostel ? "buttonactive" : "flexdiv"
                }
                onClick={this.current}
                ref={(node) => {
                  this.node = node;
                }}
              >
                Current Hostels
              </button>
              <button
                className={
                  this.state.upcominghostel ? "buttonactive" : "flexdiv"
                }
                onClick={this.upcoming}
                ref={(node) => {
                  this.node = node;
                }}
              >
                Next Allotments
              </button>
            </div>
          )}
        </div>

        <div className="flex2">
          <div>
            <h1 className="allheadings">
              {" "}
              <button
                className={this.state.burger ? "burger" : "no-burger"}
                // onClick={this.burgerclick}
                onClick={this.handleClick}
                ref={(node) => {
                  this.node = node;
                }}
              ></button>
              Admin Workspace
            </h1>
          </div>

          <div className={this.state.showUsers ? "" : "admindiv"}>
            {(this.state.showUsers && (
              <ShowUsers
                hostel={this.state.hostelDetail}
                closeUsers={this.closeUsers}
              />
            )) ||
              ((this.state.edithostel || this.state.addhostel) && (
                <Addhostel existing={this.state.hostelDetail} />
              )) ||
              (this.state.admininfo && <AdminInfo User={this.props.User} />) ||
              (this.state.currenthostel && (
                <Currenthostel
                  edithostel={this.edithostel}
                  showUsers={this.showUsers}
                />
              )) ||
              (this.state.upcominghostel && <Upcomingevents />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Adminpage;
