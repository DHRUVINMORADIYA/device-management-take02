import React from "react";
import Cards from "../Components/Cards";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import Devices from "./Devices";
import { connect } from "react-redux";
import { addHomeCard } from "../Redux/Action";
Modal.setAppElement("#root");

function Home(props) {
  console.log("props", props.listHomes);
  const [isHomeCardModalOpen, toggleHomeCardModal] = React.useState(false);
  const [is_home_form_open, toggle_home_form] = React.useState(false);
  const [index, setIndex] = React.useState();
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
    if (props.listHomes && props.listHomes.length >= index)
      return <Devices listHomes={props.listHomes[index]}></Devices>;
  }

  function showHomeList() {
    if (props.listHomes && props.listHomes.length < 1) {
      return <div>There is no home to show!</div>;
    }
    return (
      props.listHomes &&
      props.listHomes.map((i) => (
        <li key={i.id}>
          <Cards
            type="homeCard"
            title={i.title}
            id={i.id}
            openModal={handleToggleHomeCardModal}
          />
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
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushHome: (title) => dispatch(addHomeCard(title)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
