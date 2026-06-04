import React from 'react';

export default function CookiesPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8">Cookies Policy</h1>
      
      <div className="prose prose-invert prose-cyan max-w-none text-slate-300">
        <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Are Cookies?</h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How Tournament Hub Uses Cookies</h2>
        <p>
          When you use and access the Service, we may place a number of cookies files in your web browser.
        </p>
        <p>
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
          <li><strong>Essential Cookies:</strong> To enable certain functions of the Service, such as remembering your login status so you do not have to sign in repeatedly.</li>
          <li><strong>Analytics/Performance Cookies:</strong> To provide analytics regarding your use of the Service, allowing us to understand how visitors interact with the website, which helps us to improve its structure and content. (e.g., Google Analytics).</li>
          <li><strong>Preference Cookies:</strong> To store your preferences and various settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service. Wait, we do not currently show ads, but we do use analytical tools like Google Analytics which rely on cookies to measure website performance and traffic.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Are Your Choices Regarding Cookies?</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. You can also use our cookie consent banner to manage your preferences upon your first visit.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">More Information</h2>
        <p>
          If you have any questions about this Cookies Policy, please contact us at: support@tournamenthub.me
        </p>
      </div>
    </div>
  );
}
