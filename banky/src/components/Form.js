import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import authstore from "../store/authStore";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.name });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.value == "signUp"
      ? authstore.signUp(user)
      : authstore.signIn(user);
    setIsOpen;
  };
  const signOut = () => {
    authstore.signOut(user);
  };
  return (
    <div>
      <h3>
        {authstore.user ? (
          <>
            <Link to="userprofile">
              {/* <BsPersonCircle className=" text-light nav-t" /> */}
            </Link>
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
              type="text"
              value={user.firstName}
              onChange={handleChange}
            />
            <div>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.label>User Name</Form.label>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.label>Email</Form.label>
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
            <button value="signIn" onClick={handleSubmit}>
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

export default observer(Form);
// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),

//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "300px",
//     },
//     "& .MuiButtonBase-root": {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// const Form = ({ handleClose }) => {
//   const classes = useStyles();
//   // create state variables for each input
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUserName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       firstName,
//       lastName,
//       email,
//       username,
//       phoneNumber,
//       password,
//       confirmPassword
//     );
//     handleClose();
//   };

//   return (
//     <form className={classes.root} onSubmit={handleSubmit}>
//       <TextField
//         label="First Name"
//         variant="filled"
//         required
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <TextField
//         label="Last Name"
//         variant="filled"
//         required
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <TextField
//         label="Email"
//         variant="filled"
//         type="email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="username"
//         variant="filled"
//         type="username"
//         required
//         value={username}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <TextField
//         label="Phone Number"
//         variant="filled"
//         type="tel"
//         required
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         variant="filled"
//         type="password"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <TextField
//         label="Confirm Password"
//         variant="filled"
//         type="password"
//         required
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <div>
//         <Button variant="contained" onClick={handleClose}>
//           Login
//         </Button>
//         <Button variant="contained" onClick={handleClose}>
//           Cancel
//         </Button>
//         <Button type="submit" variant="contained" color="primary">
//           Signup
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default Form;
