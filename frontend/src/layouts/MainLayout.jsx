import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <TopBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
