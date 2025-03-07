
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'
import BookForm from './pages/BookForm'
import Gallery from './pages/Gallery'
import TeamContact from './pages/TeamContact'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/gallery" element={<Gallery/>} />
          <Route path="/about/gallery/video/:videoId" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/service/booking/:id" element={<BookForm />} />
          <Route path="/team-contact" element={<TeamContact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
