import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'Yuvantaa Digitals | Digital Growth, Creative & AI Solutions',
    description: 'Your Digital Growth Partner. INNOVATE. ELEVATE. TRANSFORM. Helping businesses with Business Growth, Creative Services, and AI Solutions in Pune and beyond.',
    canonical: 'https://yuvantaadigitals.com/'
  },
  '/about': {
    title: 'About Us | Yuvantaa Digitals — Your Digital Growth Partner',
    description: 'Discover Yuvantaa Digitals. We bring digital growth, creative visual services, and AI-powered solutions together to help businesses move forward.',
    canonical: 'https://yuvantaadigitals.com/about'
  },
  '/services': {
    title: 'Services & Capabilities | Yuvantaa Digitals — Growth, Creative, AI',
    description: 'Explore our three core pillars: Business Growth, Creative Services, and AI Solutions tailored to scale your brand and streamline operations.',
    canonical: 'https://yuvantaadigitals.com/services'
  },
  '/contact': {
    title: 'Contact Us | Yuvantaa Digitals — Pune, Maharashtra',
    description: 'Get in touch with Yuvantaa Digitals. Call +91 9423121388, message on WhatsApp, or email yuvantaadigitals@gmail.com for a tailored digital growth consultation.',
    canonical: 'https://yuvantaadigitals.com/contact'
  }
};

export function useSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentSEO = seoData[pathname] || seoData['/'];

    // Update document title
    document.title = currentSEO.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentSEO.description);

    // Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentSEO.canonical);

    // Update Open Graph tags
    const updateOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOG('og:title', currentSEO.title);
    updateOG('og:description', currentSEO.description);
    updateOG('og:url', currentSEO.canonical);
  }, [pathname]);
}
