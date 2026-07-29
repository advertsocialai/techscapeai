import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
// import Blog from './pages/Blog' // Blog hidden — route removed, shows 404
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
import Industries from './pages/Industries'
import AiAgent from './pages/AI-agents'
import Travel from './pages/travel'
// import AdTechMarketing from './pages/AdTechMarketing'
// import FinanceAI from './pages/FinanceAI'
// import RecruitmentAI from './pages/RecruitmentAI'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/industries" element={<MainLayout><Industries /></MainLayout>} />
        <Route path="/ai-agent" element={<MainLayout><AiAgent /></MainLayout>} />
        <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
        <Route path="/travel" element={<MainLayout><Travel /></MainLayout>} />
        {/* <Route path="/ad-tech-marketing" element={<MainLayout><AdTechMarketing /></MainLayout>} />
        <Route path="/finance-ai" element={<MainLayout><FinanceAI /></MainLayout>} />
        <Route path="/recruitment-ai" element={<MainLayout><RecruitmentAI /></MainLayout>} /> */}
        {/* Blog hidden: no /blog route so it falls through to the 404 catch-all below */}
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}