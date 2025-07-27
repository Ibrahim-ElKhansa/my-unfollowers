import React from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

export default function Footer() {
  const handleWebsiteClick = () => {
    track('footer_website_click');
  };

  const handleFAQClick = () => {
    track('footer_faq_click');
  };

  const handlePrivacyPolicyClick = () => {
    track('footer_privacy_policy_click');
  };

  return (
    <footer className="footer">
      <a 
        href="https://ibrahimelkhansa.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="footer__link"
        onClick={handleWebsiteClick}
      >
        Made by Ibrahim El-Khansa
      </a>
      <nav className="footer__nav">
        <Link 
          href="/faq" 
          className="footer__nav-link"
          onClick={handleFAQClick}
        >
          FAQ
        </Link>
        <span className="footer__nav-separator"></span>
        <Link 
          href="/privacy-policy" 
          className="footer__nav-link"
          onClick={handlePrivacyPolicyClick}
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
