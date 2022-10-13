import {Link} from"react-router-dom";
import './App.css';

function Layout() {
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
        <h1>This is the home page</h1>
        </div>
    );
}
        export default Layout;