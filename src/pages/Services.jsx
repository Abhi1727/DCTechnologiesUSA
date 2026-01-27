import { FaUserTie, FaBriefcase, FaChartLine, FaHandshake, FaClipboardCheck, FaUsers, FaCode, FaDatabase, FaCloud, FaShieldAlt, FaMobile, FaCog } from 'react-icons/fa'
import SEOHead from '../components/SEOHead.jsx'
import { pageSEO, serviceSchema, breadcrumbSchemas } from '../utils/seo'

const iconMap = {
  FaUserTie, FaBriefcase, FaChartLine, FaHandshake, FaClipboardCheck, FaUsers,
  FaCode, FaDatabase, FaCloud, FaShieldAlt, FaMobile, FaCog,
}

const services = [
  {
    id: 1,
    icon: 'FaUserTie',
    title: 'IT Consulting',
    description: 'It takes more than skills to find an ideal hire. With our personal approach, expert insights, and talent database, we help you take your IT team to the next level.',
    features: ['Contract-to-Hire', 'Direct Hire', 'Permanent Placement', 'Executive Search']
  },
  {
    id: 2,
    icon: 'FaChartLine',
    title: 'IT Training',
    description: 'We provide IT training to freshers, job seekers, new recruits, and experienced professionals to enhance their knowledge, efficiency, and productivity.',
    features: ['Technical Training', 'Project Management', 'Emerging Technologies', 'Management Development']
  },
  {
    id: 3,
    icon: 'FaBriefcase',
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions that scale with your business needs, providing skilled professionals for short-term and long-term projects.',
    features: ['Project-Based Hiring', 'Temporary Staffing', 'Seasonal Support', 'Resource Augmentation']
  },
  {
    id: 4,
    icon: 'FaHandshake',
    title: 'Permanent Placement',
    description: 'Find the perfect full-time employees who align with your company culture and contribute to long-term success.',
    features: ['Full-Time Hiring', 'Cultural Fit Assessment', 'Background Verification', 'Onboarding Support']
  },
  {
    id: 5,
    icon: 'FaClipboardCheck',
    title: 'Workforce Optimization',
    description: 'Strategic workforce planning and optimization services to maximize productivity and reduce operational costs.',
    features: ['Resource Planning', 'Cost Optimization', 'Performance Analysis', 'Capacity Management']
  },
  {
    id: 6,
    icon: 'FaUsers',
    title: 'Team Building',
    description: 'Build high-performing teams with our expert guidance on team composition, dynamics, and development strategies.',
    features: ['Team Assessment', 'Skill Gap Analysis', 'Leadership Development', 'Culture Building']
  },
]

const techAreas = [
  { icon: 'FaCode', title: 'Software Development' },
  { icon: 'FaDatabase', title: 'Data Science & BI' },
  { icon: 'FaCloud', title: 'Cloud Computing' },
  { icon: 'FaShieldAlt', title: 'Cybersecurity' },
  { icon: 'FaMobile', title: 'Web & Mobile Development' },
  { icon: 'FaCog', title: 'DevOps & Infrastructure' },
]

export default function Services() {
  const combinedSchema = [serviceSchema, breadcrumbSchemas.services]

  return (
    <>
      <SEOHead
        title={pageSEO.services.title}
        description={pageSEO.services.description}
        keywords={pageSEO.services.keywords}
        canonical={pageSEO.services.canonical}
        schema={combinedSchema}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive staffing and IT consulting solutions designed to meet your business's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-secondary-700">
              Empowering Your Workforce Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sourcing top talent to optimizing workforce strategies, we help you build a stronger future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon]
              return (
                <div key={service.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-3xl text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-700 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-secondary-700">
              We Help You Hire Candidates For
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon]
              return (
                <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-2xl text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-secondary-700 text-sm">{area.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Find Your Ideal Candidate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert recruiters today and let us help you build your dream team
          </p>
          <a href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors">
            Get Started
          </a>
        </div>
      </section>
    </div>
    </>
  )
}
