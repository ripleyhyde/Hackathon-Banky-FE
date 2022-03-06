// import React, { useState } from "react";
// import { Modal, Form } from "react-bootstrap";
// import { BsPersonCircle } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { observer } from "mobx-react";

// import authstore from "../store/authStore";

// const UserModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     event.target.value === "signUp"
//       ? authstore.signUp(user)
//       : authstore.signIn(user);
//     setIsOpen(false);
//   };

//   const signout = () => {
//     authstore.signOut(user);
//   };
//   return (
//     <div>
//       <h3>
//         {authstore.user ? (
//           <>
//             <Link to="userprofile">
//               <BsPersonCircle className=" text-light nav-t" />
//             </Link>
//             <button className="btn-reg nav-t " onClick={signout}>
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <button className="btn-reg nav-t " onClick={() => setIsOpen(true)}>
//             Registration
//           </button>
//         )}
//       </h3>

//       <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <BsPersonCircle /> User
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Label>User Name </Form.Label>
//             <Form.Control
//               name="username"
//               value={user.username}
//               type="text"
//               onChange={handleChange}
//             />
//             <div>
//               <Form.Label>Eamil </Form.Label>
//               <Form.Control
//                 name="email"
//                 type="email"
//                 value={user.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 name="password"
//                 type="password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <div>
//             <button
//               className="btn-regster"
//               value="signIn"
//               onClick={handleSubmit}
//             >
//               Sign In
//             </button>
//             <button
//               className="btn-regster"
//               value="signUp"
//               onClick={handleSubmit}
//             >
//               Sign Up
//             </button>
//           </div>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default observer(UserModal);
