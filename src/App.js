import { Provider } from "react-redux";
import Contact from "./components/contacts/Contact";
import Navbar from "./components/Navbar";
import "./styles.css";
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contact />
          </div>
        </div>
      </div>
    </Provider>
  );
}
