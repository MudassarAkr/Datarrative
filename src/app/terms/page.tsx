import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - Legal Terms & Conditions',
  description: 'DashCrafters terms of service. Read the legal terms and conditions for using our data analytics and Power BI consulting services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dashcrafters.co.uk/terms",
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the DashCrafters website and services ("Services"), you agree to be bound by these Terms of Service 
                  ("Terms"). If you disagree with any part of these terms, you may not access our Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms apply to all visitors, users, and others who access or use our Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DashCrafters provides data analytics, business intelligence, and Power BI dashboard services. Our Services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Custom dashboard development and design</li>
                  <li>Data analysis and visualization</li>
                  <li>Business intelligence consulting</li>
                  <li>Power BI implementation and training</li>
                  <li>Data integration and ETL services</li>
                  <li>Ongoing support and maintenance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so 
                  constitutes a breach of these Terms, which may result in immediate termination of your account.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Account Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for safeguarding your account credentials and for any activities or actions under your account. 
                  You must notify us immediately of any breach of security or unauthorized use of your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Agreement and Deliverables</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Project Scope</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each project engagement will be governed by a separate Statement of Work (SOW) or Service Agreement that outlines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Project scope and objectives</li>
                  <li>Deliverables and milestones</li>
                  <li>Timeline and deadlines</li>
                  <li>Pricing and payment terms</li>
                  <li>Acceptance criteria</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Client Responsibilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide timely access to necessary data, systems, and resources</li>
                  <li>Designate a point of contact for project communications</li>
                  <li>Review and provide feedback on deliverables within agreed timeframes</li>
                  <li>Ensure data provided complies with applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Fees</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fees for our Services will be specified in the applicable SOW or Service Agreement. All fees are quoted and payable in GBP 
                  unless otherwise agreed.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Payment Schedule</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unless otherwise specified, payment terms are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>50% deposit upon project commencement</li>
                  <li>Milestone payments as defined in the SOW</li>
                  <li>Final payment upon project completion and acceptance</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Late Payments</h3>
                <p className="text-gray-700 leading-relaxed">
                  Late payments may incur interest charges at the rate of 1.5% per month or the maximum rate permitted by law. 
                  We reserve the right to suspend Services for accounts with overdue payments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Client Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain all rights to your data and content. You grant us a limited license to use your data solely for the purpose 
                  of providing the Services.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Deliverables</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upon full payment, you own the final deliverables created specifically for your project. We retain ownership of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Pre-existing intellectual property and methodologies</li>
                  <li>Reusable components and frameworks</li>
                  <li>General knowledge and experience gained</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Portfolio Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may showcase non-confidential aspects of completed projects in our portfolio and marketing materials unless 
                  otherwise agreed in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the engagement. 
                  This obligation survives termination of the Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Confidential information does not include information that is publicly available, independently developed, or rightfully 
                  received from third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Service Warranty</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We warrant that Services will be performed in a professional manner consistent with industry standards. Any defects 
                  in deliverables will be corrected at no additional charge if reported within 30 days of delivery.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                  WE DO NOT WARRANT THAT SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DASHCRAFTERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability for any claims arising from Services shall not exceed the amount paid by you for the specific 
                  Services giving rise to the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.1 Termination by Client</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may terminate Services by providing 14 days written notice. You will be responsible for payment of all work 
                  completed up to the termination date.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.2 Termination by DashCrafters</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate Services immediately if you breach these Terms, fail to make timely payments, or if continuing 
                  the engagement would violate applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold DashCrafters harmless from any claims arising from your use of the Services, 
                  your breach of these Terms, or your violation of any law or rights of third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard 
                  to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated 
                  Terms on our website. Your continued use of Services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated 
                  to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>DashCrafters</strong></p>
                  <p className="text-gray-700">Email: <a href="mailto:legal@dashcrafters.co.uk" className="text-primary-600 hover:underline">legal@dashcrafters.co.uk</a></p>
                  <p className="text-gray-700">Phone: +44 (0) 20 1234 5678</p>
                  <p className="text-gray-700">Address: London, United Kingdom</p>
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

