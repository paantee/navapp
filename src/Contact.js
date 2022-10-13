import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import About from './About';
import App from "./App";
import NotFound from './NotFound';

function Contact() {
    return (
      <div>
                <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <h2>Contact</h2>
      </div>
    );
  }

export default Contact;