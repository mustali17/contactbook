import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactaction";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  let history = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function createContact(e) {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email
    };
    dispatch(addContact(new_contact));
    history("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => createContact(e)}>
            <div className="form-group">
              <div className="mb-3">
                <input
                  type="text"
                  onChange={function changename(event) {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={function changephone(event) {
                    setPhone(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your phone"
                  value={phone}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={function changename(event) {
                    setEmail(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-primary"
                  name="add"
                  value="Add"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
