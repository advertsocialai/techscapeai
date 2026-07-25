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
import Industries from './pages/Industries'
import AiAgent from './pages/AI-agents'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/Dashboard'
import AdminContacts from './admin/pages/Contacts'
import AdminSubscribers from './admin/pages/Subscribers'
import AdminCareer from './admin/pages/Career'
import AdminCareerPost from './admin/pages/CareerPost'
import AdminSettings from './admin/pages/Settings'
import AdminBlogCategory from './admin/pages/BlogCategory'
import AdminCreateBlog from './admin/pages/CreateBlog'
import AdminBlogs from './admin/pages/Blogs'

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
        <Route path="/industries" element={<MainLayout><Industries /></MainLayout>} />
        <Route path="/ai-agent" element={<MainLayout><AiAgent /></MainLayout>} />
        <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="subscribers" element={<AdminSubscribers />} />
          <Route path="career" element={<AdminCareer />} />
          <Route path="career/new" element={<AdminCareerPost />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="blog/category" element={<AdminBlogCategory />} />
          <Route path="blog/create" element={<AdminCreateBlog />} />
          <Route path="blog/list" element={<AdminBlogs />} />
        </Route>
        {SHOW_WIP_PAGES && (
          <>
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />

          </>
        )}
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}