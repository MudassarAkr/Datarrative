import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy - How We Use Cookies',
  description: 'DashCrafters cookie policy. Learn about how we use cookies and similar technologies to improve your browsing experience.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/cookies",
  },
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make 
                  websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, 
                  while session cookies are deleted as soon as you close your web browser.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When you visit the DashCrafters website, we use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Ensure our website functions properly</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our website</li>
                  <li>Improve your browsing experience</li>
                  <li>Provide personalized content and advertising</li>
                  <li>Understand which pages are most popular</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 Strictly Necessary Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  These cookies are essential for the website to function properly. They enable basic functions like page navigation, 
                  access to secure areas, and form submissions. The website cannot function properly without these cookies.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Session authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Performance Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and 
                  error messages received. This helps us improve how our website works.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Google Analytics cookies</li>
                    <li>Page load time tracking</li>
                    <li>Error tracking cookies</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.3 Functional Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  These cookies allow the website to remember choices you make (such as your language preference or dark mode setting) 
                  and provide enhanced, more personal features.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Theme preference (light/dark mode)</li>
                    <li>Language selection</li>
                    <li>User interface customization</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.4 Targeting/Advertising Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  These cookies are used to deliver content more relevant to you and your interests. They may be used to deliver 
                  targeted advertising or limit the number of times you see an advertisement.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Social media platform cookies</li>
                    <li>Advertising network cookies</li>
                    <li>Remarketing cookies</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may use third-party service providers who set cookies on our website to provide their services. These include:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to 
                      collect information such as how often users visit the site, what pages they visit, and what other sites they used 
                      before coming to our site.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Social Media Platforms</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      We may use plugins from social networks such as LinkedIn and Twitter. These services may set cookies through our 
                      website to track social sharing and interactions.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing Platforms</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      We may use marketing platforms to deliver targeted content and measure campaign effectiveness. These platforms 
                      may set cookies to track user behavior across websites.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Cookie Duration</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The length of time a cookie stays on your device depends on its type:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them. Expiry periods vary from days to years</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. How to Manage Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">6.1 Browser Settings</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Block all cookies</li>
                  <li>Accept only first-party cookies</li>
                  <li>Delete cookies when you close the browser</li>
                  <li>Notify you when cookies are set</li>
                </ul>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> If you block cookies, some features of our website may not function properly.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">6.2 Browser-Specific Instructions</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                  <p><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</p>
                  <p><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</p>
                  <p><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">6.3 Opt-Out Tools</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">NAI Opt-out Tool</a></li>
                  <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">DAA Opt-out Tool</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Do Not Track Signals</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Some browsers include a "Do Not Track" (DNT) feature. Currently, there is no industry standard for how to respond to 
                  DNT signals. At this time, our website does not respond to DNT browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Changes to This Cookie Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, 
                  or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. More Information</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  For more information about how we handle your personal data, please see our <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
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
