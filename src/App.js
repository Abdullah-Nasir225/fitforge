import './App.css';
import './'
import { createTheme, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import Appointment from './pages/Appointment';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Shedule from './pages/Shedule';
import Trainers from './pages/Trainers';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/FAQ';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Thanks from './pages/Thanks';

function App() {
  const location = useLocation();
  const mytheme = createTheme({
    palette: {
      primary: {
        main: '#FB8942'
      },
      secondary: {
        main: '#3f50b5',
      }
    }
  })
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(20)
    
    setTimeout(() => {
      setProgress(100)
    }, 500)
  }, [location.pathname])

  return (
    <ThemeProvider theme={mytheme}>
      <div className="App">
        <Navbar/>
        <LoadingBar
          color="#ff7b00ff"
          height='3px'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Shedule" element={<Shedule />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
