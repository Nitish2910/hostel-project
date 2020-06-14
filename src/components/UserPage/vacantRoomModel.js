import React from "react";
import Modal from "react-modal";
import Select from "react-select";

export default class OptionModal extends React.Component {
  state = {
    vacantRooms: this.props.vacantRooms,
    value: {
      value: 0,
      label: this.props.vacantRooms[0].prefix,
    },
  };

  changeSelect = (value) => {
    this.setState(() => ({ value: value }));
  };
  render() {
    //console.log(this.props.vacantRooms)
    return (
      <div>
        <Modal
          isOpen={!!this.props.openVacantModal}
          onRequestClose={this.props.changeVacantModel}
          ariaHideApp={false}
        >
          <div className="maintainflex">
            <div className="non-moveable-header">
              {/*Header of Model */}
              <h2 className="vacantrooms">Vacant Rooms</h2>

              <button
                className="vacantRoomModelButton"
                onClick={this.props.changeVacantModel}
              >
                X
              </button>
            </div>
            <div className="vacantRoomModel">
              {/*body of Model*/}
              <p>
                <span className="prefix-color">##</span> room number
              </p>
              <p>
                <span className="suffix-color">##</span> vacant seat{" "}
              </p>
              <h3>Select floor:</h3>
              <div className="fixedSelect">
                <Select
                  className="selectroom"
                  name="roomNo"
                  menuPlacement="auto"
                  menuPosition="fixed"
                  onChange={this.changeSelect}
                  value={this.state.value}
                  placeholder="Select Room"
                  options={this.state.vacantRooms.map((detail, index) => ({
                    value: index,
                    label: detail.prefix,
                  }))}
                />
              </div>

              {/* this is main content which render*/}
              {
                <div className="margin-selectbar">
                  {this.state.vacantRooms[this.state.value.value].rooms.map(
                    (room, index) => {
                      return (
                        <div key={index} className="need-box">
                          {
                            <div className="need-box">
                              <span className="prefix-part">
                                {" " +
                                  this.state.vacantRooms[this.state.value.value]
                                    .prefix +
                                  room[0] +
                                  " "}{" "}
                              </span>
                              <span className="suffix-part">
                                {" " + room[1] + " "}
                              </span>
                            </div>
                          }
                        </div>
                      );
                    }
                  )}
                </div>
              }
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
