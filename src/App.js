import { Provider } from "react-redux";
import Contact from "./components/contacts/Contact";
import Navbar from "./components/Navbar";
import "./styles.css";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/contacts/add" element={<AddContact />} />
                <Route path="contacts/edit/:id" element={<EditContact />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
