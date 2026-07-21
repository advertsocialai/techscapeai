import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, canonical, ogImage }) {
  const baseUrl = 'https://techscapeai.in'
  const defaultImage = `${baseUrl}/logotechscapeai.svg`
  const fullCanonical = `${baseUrl}${canonical}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TechScape AI" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:site" content="@techscapeai" />
    </Helmet>
  )
}
