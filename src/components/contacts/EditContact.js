import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getContact,
  updateContact
} from "../../actions/contactaction";
import shortid from "shortid";
import { useNavigate, useParams } from "react-router-dom";

export default function EditContact() {
  let { id } = useParams();

  let history = useNavigate();

  const contact = useSelector((state) => state.contact.contact);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getContact(id));
  }, [contact]);

  function onUpdateContact(e) {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email
    });
    dispatch(updateContact(update_contact));
    history("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => onUpdateContact(e)}>
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
                  className="btn btn-danger"
                  name="add"
                  value="Edit Contact"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
