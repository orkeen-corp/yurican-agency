import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/common/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AutomatisationPage from './pages/AutomatisationPage'
import DataFrancePage from './pages/DataFrancePage'
import IntegrationsPage from './pages/IntegrationsPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'

// Yurican website - MVP routes
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Specific route for Automatisation (custom page layout) */}
        <Route path="/services/automatisation" element={<AutomatisationPage />} />
        {/* Specific route for Data France (custom page layout) */}
        <Route path="/services/data-france" element={<DataFrancePage />} />
        {/* Specific route for Integrations (custom page layout) */}
        <Route path="/services/integration" element={<IntegrationsPage />} />
        {/* Generic service detail page for other services */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/equipe" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
