import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </>
    );
}

export default App;
