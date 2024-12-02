
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import PatientEducation from './pages/PatientEducation'
import Contact from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<PatientEducation />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
