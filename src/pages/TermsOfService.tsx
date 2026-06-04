import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8">Terms of Service</h1>
      
      <div className="prose prose-invert prose-cyan max-w-none text-slate-300">
        <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Tournament Hub, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
        <p>
          Tournament Hub provides a platform for organizing, managing, and tracking esports and sports tournaments. We continually improve our services, which may evolve over time. We reserve the right to modify or discontinue any part of the service at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Conduct</h2>
        <p>
          You agree not to use the service to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
          <li>Violate any local, state, national, or international law or regulation.</li>
          <li>Transmit any material that is abusive, harassing, tortious, defamatory, vulgar, pornographic, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
          <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          <li>Interfere with or disrupt the service or servers or networks connected to the service.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Intellectual Property</h2>
        <p>
          All right, title, and interest in and to the service (excluding content provided by users) are and will remain the exclusive property of Tournament Hub and its licensors.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          Tournament Hub shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from from your use of the service.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at: support@tournamenthub.app
        </p>
      </div>
    </div>
  );
}
