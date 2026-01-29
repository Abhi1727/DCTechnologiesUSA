import SEOHead from '../components/SEOHead.jsx'
import { siteData } from '../utils/constants'

export default function TermsConditions() {
  const lastUpdated = "January 28, 2026"

  return (
    <>
      <SEOHead
        title="Terms and Conditions | DC Technologies USA"
        description="Terms and Conditions for DC Technologies USA. Read our terms of service, user agreements, and usage policies."
        keywords="terms and conditions, terms of service, user agreement, DC Technologies USA"
        canonical="https://dctechnologiesusa.com/terms-conditions"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section bg-white">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you and DC Technologies USA ("Company," "we," "us," or "our") concerning your access to and use of the <a href="https://dctechnologiesusa.com" className="text-primary-500 hover:text-primary-600">dctechnologiesusa.com</a> website and our services.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the website or use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Services Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  DC Technologies USA provides IT staffing, technology recruitment, and consulting services including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Contract staffing and temporary placement services</li>
                  <li>Permanent placement and direct hire services</li>
                  <li>IT consulting and training services</li>
                  <li>Workforce optimization and team building</li>
                  <li>Executive search and recruitment</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">User Accounts and Registration</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Account Creation</h3>
                <p className="text-gray-600 leading-relaxed">
                  To access certain features of our services, you may be required to register for an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Account Termination</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or any other reason at our sole discretion.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Acceptable Use Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to use our website or services to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit harmful code, viruses, or malicious software</li>
                  <li>Engage in unauthorized access, hacking, or data scraping</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Harass, threaten, or harm other users</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Interfere with website functionality or security measures</li>
                  <li>Use automated systems or bots without authorization</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Resell or redistribute our services without permission</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Candidate Services</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Job Applications</h3>
                <p className="text-gray-600 leading-relaxed">
                  When submitting job applications through our services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>You represent that all information provided is truthful and accurate</li>
                  <li>You authorize us to share your information with potential employers</li>
                  <li>You understand that we do not guarantee job placement</li>
                  <li>You agree to participate in interviews and assessments as required</li>
                  <li>You will notify us of any changes to your employment status or availability</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Background Checks</h3>
                <p className="text-gray-600 leading-relaxed">
                  You authorize us to conduct background checks, employment verification, reference checks, and other screening processes as required by employers or applicable law.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Client Services</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Service Agreements</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients engaging our staffing services agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Provide accurate job descriptions and requirements</li>
                  <li>Comply with all applicable employment laws and regulations</li>
                  <li>Pay agreed-upon fees in accordance with our fee schedule</li>
                  <li>Not directly hire our candidates without proper authorization</li>
                  <li>Provide a safe and lawful work environment</li>
                  <li>Report any issues or concerns promptly</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Fees and Payment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Service fees are outlined in separate service agreements. Payment terms include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Fees are due upon receipt of invoice unless otherwise agreed</li>
                  <li>Late payments may incur interest charges and collection fees</li>
                  <li>Refund policies vary by service type and are detailed in service agreements</li>
                  <li>All fees are subject to applicable taxes</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Intellectual Property Rights</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Our Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, software, and design, are owned by DC Technologies USA and protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Limited License</h3>
                <p className="text-gray-600 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal or business purposes. You may not:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Create derivative works based on our content</li>
                  <li>Remove copyright or proprietary notices</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">User Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  By submitting content (resumes, applications, reviews), you grant us a worldwide, royalty-free license to use, reproduce, and distribute such content for the purpose of providing our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Disclaimers and Limitations</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">No Warranties</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Accuracy or reliability of information</li>
                  <li>Security of data transmission</li>
                  <li>Job placement or employment outcomes</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, DC Technologies USA shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Indirect, incidental, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages resulting from third-party actions or content</li>
                  <li>Damages exceeding the fees paid to us in the past 12 months</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless DC Technologies USA, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Your use of our website or services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit or transmit</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Dispute Resolution</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.
                </p>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Arbitration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, except where prohibited by law.
                </p>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Class Action Waiver</h3>
                <p className="text-gray-600 leading-relaxed">
                  You agree that disputes will be resolved on an individual basis and waive any right to participate in class actions or class arbitrations.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Privacy and Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our collection, use, and protection of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <a href="/privacy-policy" className="text-primary-500 hover:text-primary-600">Privacy Policy</a> to understand our data practices.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Third-Party Services and Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites or integrate third-party services. We are not responsible for the content, privacy practices, or terms of service of these external sites. Your use of third-party services is at your own risk and subject to their respective terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Modifications to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be effective upon posting on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Breach of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>At our sole discretion for business reasons</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Upon termination, your right to use our services will immediately cease. Provisions that should survive termination will remain in effect.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Severability</h2>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Entire Agreement</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and DC Technologies USA regarding our services and supersede all prior agreements and understandings.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions or concerns regarding these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-2">DC Technologies USA</p>
                  <p className="text-gray-600">{siteData.company.address}</p>
                  <p className="text-gray-600 mt-2">Email: <a href={`mailto:${siteData.company.email}`} className="text-primary-500 hover:text-primary-600">{siteData.company.email}</a></p>
                  <p className="text-gray-600">Phone: <a href={`tel:${siteData.company.phone}`} className="text-primary-500 hover:text-primary-600">{siteData.company.phone}</a></p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <p className="text-gray-700 font-semibold mb-2">Important Notice</p>
                <p className="text-gray-600 text-sm">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, please discontinue use of our services immediately.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
