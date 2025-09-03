import './App.css';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='red'>WELCOME TO REACT</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}>Home</Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}>AboutUs</Route>
          <Route path="/contact" element={<Contact></Contact>}>Contact</Route>
          <Route path='/*' element={<PageNotFound></PageNotFound>}>PageNoteFound</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
