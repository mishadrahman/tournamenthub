import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert prose-cyan max-w-none text-slate-300">
        <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when using Tournament Hub, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
          <li>Account information (name, email address, password)</li>
          <li>Profile information (gaming handles, team names, avatar)</li>
          <li>Tournament data (brackets, match results, standings)</li>
          <li>Communications with us</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative messages, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Information Sharing</h2>
        <p>
          We do not share your personal information with third parties except as described in this privacy policy or with your consent. We may share information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
          <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
          <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
          <li>If we believe your actions are inconsistent with our user agreements or policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: support@tournamenthub.app
        </p>
      </div>
    </div>
  );
}
