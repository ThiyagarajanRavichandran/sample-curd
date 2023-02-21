import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserModal = ({ updateStateData, data, selectedData, action,saveUserData }) => {
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(selectedData);
  useEffect(() => {
    if (action === "E") {
      console.log(formData);
    }
  }, []);
  const handleClose = () => {
    setShow(false);
    let _data = { ...data, action: null };
    console.log(_data);
    updateStateData(_data);
  };

    const handleInputChange=(event)=> {
      const target = event.target;
      var value = target.value;
      const name = target.id;
      setFormData({...formData,[name]:value});

  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
   let _users=[];
   if(action==='E')
   {
    _users= data.users.map((field)=>{
        return field.id===formData?.id ? formData :field 
    });
   }
    let _data = { ...data, users: _users, action: null,selectedData:formData};
    updateStateData(_data);
    saveUserData(action,formData)
    setShow(false);

  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action ==='A' ? 'Create' :'Edit'} user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                defaultValue={formData?.name}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Name field required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="mobile"
            >
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder=""
                autoFocus
                defaultValue={formData?.mobile}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Mobile No field required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder=""
                autoFocus
                defaultValue={formData?.email}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Email Field is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="danger"
              onClick={handleClose}
              className="btn-cancel"
            >
              Close
            </Button>
            <Button variant="primary" type="submit" className="btn-submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserModal;
