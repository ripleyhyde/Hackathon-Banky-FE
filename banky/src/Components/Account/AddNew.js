import React, { useState } from "react";
import Modal from "react-modal";
import shortid from "shortid";
import "../../App.css";

Modal.setAppElement("#root");

const AddNew = ({ addNewTransaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: shortid(),
      name,
      note,
      type,
      amount,
      date: new Date(),
    };
    addNewTransaction(data);
    setName("");
    setNote("");
    setType(0);
    setAmount(0);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btnS">
        Add New
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal w-5/12"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <h2 className="adh2">Add New Transaction</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                label={"Name"}
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="b2"
              />
            </div>
            <div>
              <Input
                label={"Note"}
                placeholder="add a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="b2"
              />
            </div>
            <div>
              <Input
                label={"Amount"}
                placeholder="type a amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="b2"
              />
            </div>
            <div>
              <div className="d0">
                <label>Type</label>
                <select
                  onChange={(e) => setType(parseInt(e.target.value))}
                  className="b2"
                >
                  <option value={0}>Outgoing</option>
                  <option value={1}>Incoming</option>
                </select>
              </div>
            </div>
            <button type="submit" className="b3">
              Add
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

function Input({ label, ...props }) {
  return (
    <div className="border rounded overflow-hidden mb-4 py-1 px-2  box-border">
      <label className="px-2 pt-2  block text-grey-dark uppercase text-sm tracking-wide">
        {label}
      </label>
      <input
        className="px-2 pb-2 w-full outline-none  rounded"
        type="text"
        {...props}
      />
    </div>
  );
}

export default AddNew;
