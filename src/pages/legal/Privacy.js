import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p>Drift ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Such as your name, email address, and account credentials when you register or contact us.</li>
            <li><strong>Usage Data:</strong> Information about how you use our software and services, including device information and IP addresses.</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services;</li>
            <li>Respond to your inquiries and provide customer support;</li>
            <li>Send you updates, newsletters, and promotional materials (you can opt-out at any time);</li>
            <li>Monitor and analyze usage to improve security and prevent abuse.</li>
          </ul>
          
          <h2>3. Sharing Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li>Service providers who assist us in operating our business, such as hosting providers;</li>
            <li>Law enforcement or government authorities when required by law or to protect our rights;</li>
            <li>Affiliates or in connection with a business transaction such as a merger or sale of assets.</li>
          </ul>
          
          <h2>4. Data Security and Zero-Knowledge Approach</h2>
          <p>All passwords and sensitive data are processed securely on your device before they are sent to our servers. Specifically, data is first hashed locally on your device, ensuring that your raw password never leaves your control. Then, this hashed data is encrypted using a combination of our server's secret key and a randomly generated key. Finally, it is further hashed and salted on our servers.</p>
          <p>This layered approach means neither we nor any third party ever have access to your unencrypted sensitive information. In other words, we operate under a zero-knowledge proof (ZKP) model where your private data remains confidential and protected at all times.</p>
          
          <h2>5. Your Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or correct your personal information by contacting us;</li>
            <li>Opt-out of receiving promotional emails by following the unsubscribe instructions;</li>
            <li>Delete your account by contacting support (note that some data may be retained as required by law or for legitimate business purposes).</li>
          </ul>
          
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to enhance your experience on our site. You can control cookies through your browser settings.</p>
          
          <h2>7. International Users</h2>
          <p>If you are accessing our services from outside your country, please be aware that your information may be transferred to and processed in the country where we operate.</p>
          
          <h2>8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under 13 years old, and we do not knowingly collect personal information from children under 13.</p>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website with an updated effective date.</p>
          
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at contact@getdrift.me</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 