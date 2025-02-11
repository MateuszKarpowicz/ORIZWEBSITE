import { Helmet } from 'react-helmet-async';

function SEO({ 
  title, 
  description, 
  keywords,
  image = '/og-image.jpg',
  url = 'https://oriz.pl'
}) {
  return (
    <Helmet>
      {/* Podstawowe meta tagi */}
      <title>{title ? `${title} | ORIZ` : 'ORIZ - Biuro Podróży'}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Inne ważne meta tagi */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO; 