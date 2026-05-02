import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & GDPR Compliance',
  description: 'DashCrafters privacy policy. Learn how we collect, use, and protect your personal information in compliance with GDPR and UK data protection laws.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  DashCrafters ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Fill out contact forms or request quotes</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Register for an account or use our services</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Name and contact details (email address, phone number, postal address)</li>
                  <li>Company name and job title</li>
                  <li>Business requirements and project specifications</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and cookies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and security alerts</li>
                  <li>Process transactions and send related information</li>
                  <li>Send marketing and promotional communications (with your consent)</li>
                  <li>Analyze usage patterns and improve our website and services</li>
                  <li>Prevent fraud and ensure the security of our services</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Legal Basis for Processing (GDPR)</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data and context:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Consent:</strong> You have given explicit consent for processing</li>
                  <li><strong>Contract:</strong> Processing is necessary to perform a contract with you</li>
                  <li><strong>Legal obligation:</strong> We must comply with legal requirements</li>
                  <li><strong>Legitimate interests:</strong> Processing is in our legitimate business interests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.1 Service Providers</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Third-party vendors who perform services on our behalf, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Web hosting and cloud storage providers</li>
                  <li>Email and communication platforms</li>
                  <li>Analytics and marketing services</li>
                  <li>Payment processors</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.2 Legal Requirements</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.3 Business Transfers</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer required, 
                  we will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Your Data Protection Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                  <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                  <li><strong>Withdraw consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@dashcrafters.co.uk" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@dashcrafters.co.uk</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, 
                  you may not be able to use some portions of our website.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  For more information about our use of cookies, please see our <a href="/cookies" className="text-primary-600 dark:text-primary-400 hover:underline">Cookie Policy</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Security</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, 
                  no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially 
                  acceptable means to protect your data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. International Data Transfers</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your jurisdiction where data protection 
                  laws may differ. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Children's Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. 
                  If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                  and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300"><strong>DashCrafters</strong></p>
                  <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:privacy@dashcrafters.co.uk" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@dashcrafters.co.uk</a></p>
                  <p className="text-gray-700 dark:text-gray-300">Phone: +44 (0) 20 1234 5678</p>
                  <p className="text-gray-700 dark:text-gray-300">Address: London, United Kingdom</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
