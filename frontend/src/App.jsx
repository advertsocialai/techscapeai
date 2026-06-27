import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Blog from './pages/Blog'
import HowItWorksPage from './pages/HowItWorksPage'
import Research from './pages/ResearchPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import Brand from './pages/Brand'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Accessibility from './pages/Accessibility'
import TrustCenter from './pages/TrustCenter'

const SHOW_WIP_PAGES = import.meta.env.VITE_SHOW_WIP_PAGES === 'true'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/how-it-works" element={<MainLayout><HowItWorksPage /></MainLayout>} />
        <Route path="/brand" element={<MainLayout><Brand /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
        <Route path="/partners" element={<MainLayout><PartnersPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><TermsAndConditions /></MainLayout>} />
        <Route path="/accessibility" element={<MainLayout><Accessibility /></MainLayout>} />
        <Route path="/trust-center" element={<MainLayout><TrustCenter /></MainLayout>} />
        {SHOW_WIP_PAGES && (
          <>
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
            <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
          </>
        )}
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}