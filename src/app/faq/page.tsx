import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { faqStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ - Instagram Unfollowers Analyzer",
  description: "Frequently asked questions about the Instagram Unfollowers Analyzer tool",
};

export default function FAQ() {
  return (
    <article className="faq-page">
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <div className="faq-page__container">
        <nav className="faq-page__back-nav">
          <Link href="/" className="faq-page__back-link">
            ← Back to Home
          </Link>
        </nav>
        <header>
          <h1 className="faq-page__title">Frequently Asked Questions</h1>
        </header>
        
        <section className="faq-page__content">
          <article className="faq-page__item">
            <h2 className="faq-page__question">How does the Instagram Unfollowers Analyzer work?</h2>
            <p className="faq-page__answer">
              The tool analyzes your Instagram data by comparing your followers list with your following list. 
              You need to download your Instagram data from Instagram&apos;s settings and upload the followers and 
              following JSON files to see who doesn&apos;t follow you back.
            </p>
          </article>

          <article className="faq-page__item">
            <h2 className="faq-page__question">Is my data safe and secure?</h2>
            <p className="faq-page__answer">
              Yes, absolutely. All data processing happens locally in your browser. We don&apos;t store, upload, 
              or have access to any of your Instagram data. The files you upload are processed entirely 
              on your device and never leave your computer.
            </p>
          </article>

          <article className="faq-page__item">
            <h2 className="faq-page__question">How do I download my Instagram data?</h2>
            <p className="faq-page__answer">
              There is a detailed tutorial available on the <Link href="/" className="faq-page__link">home page</Link> that 
              walks you through the entire process step by step, including how to download your Instagram data.
            </p>
          </article>

          <article className="faq-page__item">
            <h2 className="faq-page__question">What file formats are supported?</h2>
            <p className="faq-page__answer">
              The tool supports JSON files from Instagram&apos;s data export. Specifically, you need the 
              followers_1.json and following.json files that come with your Instagram data download.
            </p>
          </article>

          <article className="faq-page__item">
            <h2 className="faq-page__question">Can I use this tool on mobile devices?</h2>
            <p className="faq-page__answer">
              Yes, the tool is responsive and works on mobile devices. However, for the best experience 
              when uploading and analyzing files, we recommend using a desktop or tablet.
            </p>
          </article>

          <article className="faq-page__item">
            <h2 className="faq-page__question">Is this tool free to use?</h2>
            <p className="faq-page__answer">
              Yes, the Instagram Unfollowers Analyzer is completely free to use. There are no hidden 
              fees, subscriptions, or premium features.
            </p>
          </article>
        </section>
      </div>
    </article>
  );
}
