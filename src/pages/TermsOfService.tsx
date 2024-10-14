import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to OmniLaunch. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use.
      </p>
      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using OmniLaunch, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
      <p className="mb-4">
        You may use OmniLaunch only for lawful purposes and in accordance with these Terms of Service. You agree not to use OmniLaunch:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
        <li>To engage in any activity that interferes with or disrupts the services</li>
        <li>To attempt to gain unauthorized access to any portion of the services or any other systems or networks connected to OmniLaunch</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
      <p className="mb-4">
        The content, features, and functionality of OmniLaunch are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
      <p className="mb-4">
        OmniLaunch is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
      </p>
      <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall OmniLaunch be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
      <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to check these Terms periodically for changes.
      </p>
      <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at terms@omnilaunch.com.
      </p>
    </div>
  );
};

export default TermsOfService;