import { Helmet } from 'react-helmet-async'

// Outfit + Inter for the CRT pages. Google Fonts is already allowed by the CSP in vercel.json.
export default function CRTFonts() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
      />
    </Helmet>
  )
}
