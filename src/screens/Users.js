import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import axios from "../api/ApiBaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import UserModal from "../components/UserModal";
import "../css/users.css";
import BoaAlert from "../components/BoaAlert";
const Users = () => {
  const [data, setData] = useState({
    users: [],
    action: null,
    selectedData: {},
    showAlert: false,
    alertMessage: "",
    alertVarient: "",
  });
  const { users, action, selectedData, showAlert, alertMessage, alertVarient } =
    data;
  useEffect(() => {
    axios
      .get("users")
      .then((response) => {
        setData({
          ...data,
          users: response,
          showAlert: true,
          alertMessage: "User Retrived Successfully",
          alertVarient: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userAction = (event, field, userAction) => {
    setData({ ...data, action: userAction, selectedData: field });
  };

  const updateStateData = (data) => {
    setData(data);
  };
  const hideAlert = () => {
    console.log(data);
    let _data = {
      ...data,
      showAlert: false,
      alertMessage: "",
      alertVarient: "",
    };
    console.log(_data);
    setData({ ...data, showAlert: false, alertMessage: "", alertVarient: "" });
  };
  const saveUserData = (action, formData) => {
    console.log(action, formData);
    if (action === "A") {
      axios
        .post("users/create", formData)
        .then((response) => {
          setData({ ...data, users: response });
        })
        .catch((error) => {
          console.log(error);
          setData({
            ...data,
            showAlert: true,
            alertMessage: "User Creation failed",
            alertVarient: "danger",
            action: null,
          });
        });
    } else {
      axios
        .post(`user/update/${formData.mobile}`, formData)
        .then((response) => {
          setData({ ...data, users: response });
        })
        .catch((error) => {
          console.log(error);
          setData({
            ...data,
            showAlert: true,
            alertMessage: "User updation failed",
            alertVarient: "danger",
            action: null,
          });
        });
    }
  };
  const usersRow = users.map((field, index) => (
    // Wrong! The key should have been specified here:
    <tr>
      <td>{index + 1}</td>
      <td>{field.name}</td>
      <td>{field.mobile}</td>
      <td>{field.email}</td>
      <td>
        <Row className="justify-content-md-center">
          <Col>
            <FontAwesomeIcon
              icon={faEdit}
              color="blue"
              onClick={(e) => userAction(e, field, "E")}
            />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faRemove} color="red" />
          </Col>
        </Row>
      </td>
    </tr>
  ));
  return (
    <div>
      {showAlert && (
        <BoaAlert
          message={alertMessage}
          variant={alertVarient}
          hideAlert={hideAlert}
        ></BoaAlert>
      )}
      <Button
        variant="primary"
        className="btn-create"
        onClick={(e) => userAction(e, {}, "A")}
      >
        Create user
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{usersRow}</tbody>
      </Table>
      {(action === "E" || action === "A") && (
        <UserModal
          updateStateData={updateStateData}
          data={data}
          action={action}
          selectedData={selectedData}
          saveUserData={saveUserData}
        />
      )}
    </div>
  );
};

export default Users;
