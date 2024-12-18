import React from 'react';

const CookiePolicy = () => {
  return (
    <main className="p-8 mt-16 lg:p-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how Francesco.Dev uses cookies and similar technologies to recognize you when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small data files stored on your device (computer, smartphone, or tablet) that help improve your browsing experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies to:
        <ul className="list-disc list-inside pl-4">
          <li>Understand and improve the functionality of our website.</li>
          <li>Analyze how users interact with our content.</li>
          <li>Remember your preferences for a better user experience.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Types of Cookies We Use</h2>
      <p className="mb-4">
        <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.<br />
        <strong>Performance Cookies:</strong> These cookies help us analyze site performance.<br />
        <strong>Functional Cookies:</strong> These remember your preferences to personalize your experience.<br />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Managing Cookies</h2>
      <p className="mb-4">
        Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Keep in mind, however, that disabling cookies may limit functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact</h2>
      <p className="mb-4">
        If you have questions about this Cookie Policy, contact us <a href="mailto:your-email@example.com" className="text-primary dark:text-primaryDark underline">here</a>.
      </p>
    </main>
  );
};

export default CookiePolicy;