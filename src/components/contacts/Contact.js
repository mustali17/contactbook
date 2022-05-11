import React from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const contacts = useSelector((state) => state.contacts);
  console.log("con", contacts);
  return (
    <div>
      <table class="table shadow">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
