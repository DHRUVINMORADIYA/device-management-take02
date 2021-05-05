import React from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Home.css";
import { connect } from "react-redux";
import { addDeviceCard } from "../Redux/Action";
import DeviceCard from "../Components/DeviceCard";

function Devices(props) {
  const [isDeviceCardModalOpen, toggleDeviceCardModal] = React.useState(false);
  const [is_device_form_open, toggle_device_form] = React.useState(false);

  function handleToggleDeviceCardModal() {
    toggleDeviceCardModal(!isDeviceCardModalOpen);
  }

  function handle_toggle_device_form() {
    toggle_device_form(!is_device_form_open);
  }

  const handleAddDevice = (e) => {
    e.preventDefault();
    let title = e.target[0].value;

    if (title.length > 0) {
      props.pushDevice({
        id: props.home.id,
        title: title,
      });
      // props.listHomes.listDevices.push({
      //   title: title,
      //   id: props.listHomes.listDevices.length,
      // });
      handle_toggle_device_form();
    } else {
      alert("Please Enter a title for device!");
    }
  };

  function showDevicesList() {
    if (!props.home.devices || props.home.devices.length < 1) {
      return <div>There is no Device to show!</div>;
    }
    console.log(props.home.devices);
    return (
      props.home.devices &&
      props.home.devices.map((i) => (
        <li>
          <DeviceCard title={i} openModal={handleToggleDeviceCardModal} />
        </li>
      ))
    );
  }

  return (
    <div className="deviceScreen">
      <div className="deviceListTitle">{props.home.title}</div>
      {showDevicesList()}
      <div className="addHomeButton">
        <Button
          variant="contained"
          color="primary"
          onClick={handle_toggle_device_form}
        >
          Add Device
        </Button>
      </div>
      <Modal
        isOpen={is_device_form_open}
        onRequestClose={handle_toggle_device_form}
        className="addHomeModal"
      >
        <div className="addHomeForm">
          <form
            noValidate
            autoComplete="off"
            className="form"
            onSubmit={handleAddDevice}
          >
            <div className="text">Add Device in Home "{props.home.title}"</div>

            <TextField
              id="standard-basic"
              variant="outlined"
              label="Device Title"
              className="addTitleTextField"
              required
            />

            <div className="addHomeButton">
              <Button type="submit" variant="contained" color="primary">
                Add Device
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushDevice: (id, title) => dispatch(addDeviceCard(id, title)),
  };
};

export default connect(null, mapDispatchToProps)(Devices);
