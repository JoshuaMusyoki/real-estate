import '././App.js'
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonorsPage from './pages/DonorsPage';
import PropertyOwners from './pages/PropertyOwners';
import VictimsPage from './pages/VictimsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path ='/donors' element={<DonorsPage />} />
        <Route path ='/property-owners' element={<PropertyOwners />} />
        <Route path ='/victims' element={<VictimsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
