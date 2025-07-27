import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Instagram Unfollowers Analyzer",
  description: "Privacy policy for the Instagram Unfollowers Analyzer tool - your data stays private",
};

export default function PrivacyPolicy() {
  return (
    <article className="privacy-page">
      <div className="privacy-page__container">
        <nav className="privacy-page__back-nav">
          <Link href="/" className="privacy-page__back-link">
            ← Back to Home
          </Link>
        </nav>
        <header>
          <h1 className="privacy-page__title">Privacy Policy</h1>
        </header>
        
        <main className="privacy-page__content">
          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Data Collection</h2>
            <p className="privacy-page__text">
              We do not collect, store, or transmit any personal data. The Instagram Unfollowers Analyzer 
              processes all data locally in your browser. When you upload your Instagram data files, 
              they are processed entirely on your device and never leave your computer.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Data Processing</h2>
            <p className="privacy-page__text">
              All analysis and processing of your Instagram data happens locally in your web browser. 
              No data is sent to our servers, third-party services, or external APIs. Your followers 
              and following lists remain completely private and secure.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Cookies and Analytics</h2>
            <p className="privacy-page__text">
              We use Vercel Analytics to understand general usage patterns of our website. This service 
              collects anonymized traffic data that cannot be used to identify individual users. No 
              personal information or Instagram data is included in this analytics collection.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Third-Party Services</h2>
            <p className="privacy-page__text">
              This tool does not integrate with Instagram&apos;s API or any other third-party services that 
              would have access to your data. The only external service we use is Vercel Analytics for 
              anonymized website traffic analysis.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Data Security</h2>
            <p className="privacy-page__text">
              Since all data processing happens locally in your browser, your Instagram data never 
              travels over the internet. This provides the highest level of security and privacy 
              for your personal information.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Changes to This Policy</h2>
            <p className="privacy-page__text">
              We may update this privacy policy from time to time. Any changes will be posted on this 
              page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2 className="privacy-page__subtitle">Contact</h2>
            <p className="privacy-page__text">
              If you have any questions about this privacy policy or our data practices, please contact 
              us through our website at <a href="https://ibrahimelkhansa.com" className="privacy-page__link">ibrahimelkhansa.com</a>.
            </p>
          </section>

          <p className="privacy-page__updated">
            Last updated: July 28, 2025
          </p>
        </main>
      </div>
    </article>
  );
}
