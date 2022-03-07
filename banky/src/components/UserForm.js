import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import authstore from "../stores/authStore";
import { observer } from "mobx-react";

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
      <h3>
        {authstore.user ? (
          <>
            <button onClick={signout}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>Sign Up</button>
        )}
      </h3>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <BsPersonCircle /> User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={user.firstName}
              type="text"
              onChange={handleChange}
            />
            <div>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={user.lastName}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                value={user.phoneNumber}
                type="Number"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button value="login" onClick={handleSubmit}>
              Sign In
            </button>
            <button value="signUp" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default observer(UserForm);
