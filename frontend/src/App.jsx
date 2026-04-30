import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

import CustomCursor from './components/Cursor'

export default function App() {
  return (
    <BrowserRouter>
    <CustomCursor />
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
