import React, { Fragment, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import authstore from "../stores/authStore";
import { observer } from "mobx-react";
import red from "../assets/red.png";

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.value === "signUp"
      ? authstore.signUp(user)
      : authstore.logIn(user);
    setIsOpen(false);
  };
  const signout = () => {
    authstore.signOut(user);
  };
  return (
    <div>
      <div>
        <img src={red} alt="Logo" className="i" />
      </div>
      <h3>
        {authstore.user ? (
          <button onClick={signout} className="button">
            Sign Out
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)} className="button">
            Sign Up
          </button>
        )}
      </h3>
      <Modal
        centered
        show={isOpen}
        onHide={() => setIsOpen(false)}
        className="form"
      >
        <Modal.Header>
          <Modal.Title className="user">
            <BsPersonCircle /> User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Label className="text"></Form.Label> */}
            <Form.Control
              className="box"
              name="firstName"
              value={user.firstName}
              type="text"
              onChange={handleChange}
              placeholder="First Name"
            />
            <div>
              {/* <Form.Label className="text">Last Name</Form.Label> */}
              <Form.Control
                className="box"
                name="lastName"
                value={user.lastName}
                type="text"
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div>
              {/* <Form.Label className="text">User Name</Form.Label> */}
              <Form.Control
                className="box"
                name="username"
                value={user.username}
                type="text"
                onChange={handleChange}
                placeholder="User Name"
              />
            </div>
            <div>
              {/* <Form.Label className="text">Phone Number</Form.Label> */}
              <Form.Control
                className="box"
                name="phoneNumber"
                value={user.phoneNumber}
                type="Number"
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div>
              {/* <Form.Label className="text">Email</Form.Label> */}
              <Form.Control
                className="box"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div>
              {/* <Form.Label className="text">Password</Form.Label> */}
              <Form.Control
                className="box"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <Modal.Footer>
              <div className="btn">
                <button value="login" onClick={handleSubmit} className="button">
                  Sign In
                </button>
                <button
                  value="signUp"
                  onClick={handleSubmit}
                  className="button"
                >
                  Sign Up
                </button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default observer(UserForm);
