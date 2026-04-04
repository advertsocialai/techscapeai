import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#060A14]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
