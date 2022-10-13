import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import App from "./App";
import Contact from './Contact';
import NotFound from './NotFound';

function About() {
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
        <h2>About</h2>
      </div>
    );
  }

export default About;