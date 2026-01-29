import SEOHead from '../components/SEOHead.jsx'
import { siteData } from '../utils/constants'

export default function PrivacyPolicy() {
  const lastUpdated = "January 28, 2026"

  return (
    <>
      <SEOHead
        title="Privacy Policy | DC Technologies USA"
        description="Privacy Policy for DC Technologies USA. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, DC Technologies USA"
        canonical="https://dctechnologiesusa.com/privacy-policy"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Privacy Policy
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
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  DC Technologies USA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://dctechnologiesusa.com" className="text-primary-500 hover:text-primary-600">dctechnologiesusa.com</a> or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Information We Collect</h2>
                
                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Register on the website</li>
                  <li>Express an interest in obtaining information about us or our services</li>
                  <li>Submit a job application or resume</li>
                  <li>Contact us through our contact forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in activities on the website</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Personal information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Professional information (resume, work history, skills, qualifications)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (processed securely through third-party processors)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary-700 mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Referral URLs and pages visited</li>
                  <li>Time and date of visits</li>
                  <li>Clickstream data</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect or receive to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Provide Services:</strong> Process job applications, match candidates with positions, and deliver staffing solutions</li>
                  <li><strong>Communicate:</strong> Send you updates, newsletters, marketing materials, and respond to inquiries</li>
                  <li><strong>Improve Services:</strong> Analyze usage patterns and enhance user experience</li>
                  <li><strong>Comply with Legal Obligations:</strong> Fulfill legal and regulatory requirements</li>
                  <li><strong>Prevent Fraud:</strong> Monitor and prevent fraudulent activities</li>
                  <li><strong>Marketing:</strong> Send targeted advertisements and promotional materials (with your consent)</li>
                  <li><strong>Business Operations:</strong> Manage accounts, process transactions, and maintain records</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>With Employers:</strong> When you apply for positions, we share relevant information with potential employers</li>
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. We use:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Track visitor activity to display relevant advertisements</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href={`mailto:${siteData.company.email}`} className="text-primary-500 hover:text-primary-600">{siteData.company.email}</a>
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary-700 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-2">DC Technologies USA</p>
                  <p className="text-gray-600">{siteData.company.address}</p>
                  <p className="text-gray-600 mt-2">Email: <a href={`mailto:${siteData.company.email}`} className="text-primary-500 hover:text-primary-600">{siteData.company.email}</a></p>
                  <p className="text-gray-600">Phone: <a href={`tel:${siteData.company.phone}`} className="text-primary-500 hover:text-primary-600">{siteData.company.phone}</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
