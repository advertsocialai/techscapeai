import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
<<<<<<< HEAD
import TechScapePage from './pages/TechScapePage'
import GoGagaDashboard from './pages/gogaga/GoGagaDashboard'
=======
import TravelWorkflowPage from './pages/TravelWorkflowPage'
>>>>>>> d1d7da171247a5899cd8569fb0c3f3e4fb1dcf16

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/playbooks" element={<MainLayout><TravelWorkflowPage /></MainLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/techscape" element={<TechScapePage />} />
        <Route path="/gogaga/dashboard" element={<GoGagaDashboard />} />
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
