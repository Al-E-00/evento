import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="prose mx-auto mt-auto flex flex-col gap-4 p-4">
      <h1 className="text-3xl">Privacy Policy</h1>
      <p>
        Corp ("we" or "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose,
        and protect your information when you use our website, located at evento.com (the "Website") and any related services (collectively,
        the "Services").
      </p>
      <h2 className="text-2xl">Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide directly:</strong> Name, email, address, payment details if applicable
        </li>
        <li>
          <strong>Information collected automatically:</strong> IP address, browser type, device information, usage data through cookies and
          similar tracking technologies
        </li>
      </ul>
      <h2 className="text-2xl">How We Use Your Information</h2>
      <ul>
        <li>Provide and improve our services</li>
        <li>Communicate with you</li>
        <li>Personalize content</li>
        <li>Advertising, analytics, security</li>
      </ul>
      <h2 className="text-2xl">How We Store Your Information</h2>
      <ul>
        <li>Encryption, firewalls, access controls</li>
        <li>Data is retained for 5 years</li>
      </ul>
      <h2 className="text-2xl">Your Rights and Choices</h2>
      <ul>
        <li>Right to access, correct, delete, restrict processing, object to processing</li>
        <li>Users can exercise their rights via forms, email address</li>
      </ul>
      <h2 className="text-2xl">Changes to This Policy</h2>
      <ul>
        <li>We'll update the policy on our website</li>
        <li>We'll provide notice of changes on the website, via email</li>
      </ul>

      <span className="italic text-gray-500">This is an example page</span>
    </div>
  );
}
