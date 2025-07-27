export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Instagram Unfollowers Analyzer",
  "description": "Analyze your Instagram followers and followings to see who doesn't follow you back. All processing happens locally in your browser for complete privacy.",
  "url": "https://www.myunfollowers.app/",
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "Any",
  "permissions": "No permissions required - all data processed locally",
  "author": {
    "@type": "Person",
    "name": "Ibrahim El-Khansa",
    "url": "https://ibrahimelkhansa.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Analyze Instagram followers",
    "Find mutual connections",
    "Identify non-followers",
    "Local data processing",
    "Privacy-focused",
    "No data storage"
  ],
  "browserRequirements": "Requires JavaScript and modern web browser"
}

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the Instagram Unfollowers Analyzer work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool analyzes your Instagram data by comparing your followers list with your following list. You need to download your Instagram data from Instagram's settings and upload the followers and following JSON files to see who doesn't follow you back."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe and secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. All data processing happens locally in your browser. We don't store, upload, or have access to any of your Instagram data. The files you upload are processed entirely on your device and never leave your computer."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download my Instagram data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is a detailed tutorial available on the home page that walks you through the entire process step by step, including how to download your Instagram data."
      }
    },
    {
      "@type": "Question",
      "name": "What file formats are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool supports JSON files from Instagram's data export. Specifically, you need the followers_1.json and following.json files that come with your Instagram data download."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this tool on mobile devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the tool is responsive and works on mobile devices. However, for the best experience when uploading and analyzing files, we recommend using a desktop or tablet."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Instagram Unfollowers Analyzer is completely free to use. There are no hidden fees, subscriptions, or premium features."
      }
    }
  ]
}
