'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="vl-error-area" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 0 60px' }}>
      <div className="container">
        <div className="error-content">
          <h1 style={{ fontSize: '10rem', fontWeight: 700, color: '#1A5632', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1A1A1A' }}>Page Not Found</h2>
          <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Don&apos;t worry, let&apos;s get you back on track.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-home6" style={{ padding: '1rem 2rem' }}>Back to Home</Link>
            <Link href="/contact" className="btn2-home6" style={{ padding: '1rem 2rem' }}>Contact Support</Link>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us" style={{ color: '#1A5632', fontWeight: 500 }}>About Us</Link>
            <Link href="/service" style={{ color: '#1A5632', fontWeight: 500 }}>Services</Link>
            <Link href="/project" style={{ color: '#1A5632', fontWeight: 500 }}>Projects</Link>
            <Link href="/blog" style={{ color: '#1A5632', fontWeight: 500 }}>Blog</Link>
          </div>
        </div>
      </div>
    </section>
  );
}