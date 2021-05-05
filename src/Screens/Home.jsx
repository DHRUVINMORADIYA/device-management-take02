import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import Devices from "./Devices";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { addHomeCard } from "../Redux/Action";
import HomeCard from "../Components/HomeCard";
Modal.setAppElement("#root");

function Home(props) {
  const [isHomeCardModalOpen, toggleHomeCardModal] = React.useState(false);
  const [is_home_form_open, toggle_home_form] = React.useState(false);
  const [index, setIndex] = React.useState("");
  //const [listHomes] = React.useState(initialData.listHomes);

  function handleToggleHomeCardModal(index) {
    setIndex(index);
    toggleHomeCardModal(!isHomeCardModalOpen);
  }

  function handle_toggle_home_form() {
    toggle_home_form(!is_home_form_open);
  }

  const handleAddHome = (e) => {
    e.preventDefault();
    let title = e.target[0].value;

    if (title.length > 0) {
      props.pushHome(title);
      //listHomes.push({ title: title, id: listHomes.length, listDevices: [] });
      handle_toggle_home_form();
    } else {
      alert("Please Enter a title for home!");
    }
  };

  function deviceDepartment() {
    if (props.homes && props.homes.length >= 0) {
      const home = props.homes.find((i) => i.id === index);
      if (home) return <Devices home={home}></Devices>;
    }
  }

  function showHomeList() {
    if (props.homes && props.homes.length < 1) {
      return <div>There is no home to show!</div>;
    }
    return (
      props.homes &&
      props.homes.map((i) => (
        <li key={i.id}>
          <HomeCard device={i} openModal={handleToggleHomeCardModal} />
        </li>
      ))
    );
  }

  return (
    <div>
      {showHomeList()}
      <div className="addHomeButton">
        <Button
          variant="contained"
          color="primary"
          onClick={handle_toggle_home_form}
        >
          Add Home
        </Button>
      </div>

      <Modal
        isOpen={isHomeCardModalOpen}
        onRequestClose={handleToggleHomeCardModal}
        className="deviceDepartment"
      >
        {deviceDepartment()}
      </Modal>

      <Modal
        isOpen={is_home_form_open}
        onRequestClose={handle_toggle_home_form}
        className="addHomeModal"
      >
        <div className="addHomeForm">
          <form
            noValidate
            autoComplete="off"
            className="form"
            onSubmit={handleAddHome}
          >
            <div className="text">Add Home</div>

            <TextField
              id="standard-basic"
              variant="outlined"
              label="Home Title"
              className="addTitleTextField"
              required
            />

            <div className="addHomeButton">
              <Button type="submit" variant="contained" color="primary">
                Add Home
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
const mapStatetoProps = (state) => {
  //console.log(state.firestore.ordered);
  return state.firestore.ordered;
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushHome: (title) => dispatch(addHomeCard(title)),
  };
};

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([{ collection: "homes" }])
)(Home);
