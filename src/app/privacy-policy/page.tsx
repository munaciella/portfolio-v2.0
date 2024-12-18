import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="p-8 mt-16 lg:p-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Francesco.Dev, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information when you interact with our website, including:
        <ul className="list-disc list-inside pl-4">
          <li>Your name and email address when you subscribe to updates.</li>
          <li>Technical data such as your IP address and browser type.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to improve our website, provide support, and send updates about new features or projects.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to or deletion of your personal data. Contact us <a href="mailto:your-email@example.com" className="text-primary dark:text-primaryDark underline">here</a> for assistance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us <a href="mailto:your-email@example.com" className="text-primary dark:text-primaryDark underline">here</a>.
      </p>
    </main>
  );
};

export default PrivacyPolicy;