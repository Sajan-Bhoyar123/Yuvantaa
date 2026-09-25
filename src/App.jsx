import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Code-split secondary routes for minimal initial bundle size & lightning-fast initial page load
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ParentServicePage = lazy(() => import('./pages/ParentServicePage'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page content">
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-brand-coral animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="services/:parentSlug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ParentServicePage />
            </Suspense>
          }
        />
        <Route
          path="services/:parentSlug/:childSlug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ParentServicePage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
