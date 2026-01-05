import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Bibi Moriom", 
  description = "Frontend Developer specializing in React, JavaScript, and modern web technologies.",
  keywords = "Bibi Moriom, Frontend Developer, React Developer, Web Developer, Portfolio",
  author = "Bibi Moriom",
  image = "/my-icon.ico"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#667eea" />
      
      {/* Favicon */}
      <link rel="icon" href="/my-icon.ico" />
      <link rel="apple-touch-icon" href="/my-icon.ico" />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEOHead;