import logo from './logo.svg';
import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
