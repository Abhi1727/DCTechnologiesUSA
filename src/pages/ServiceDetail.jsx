import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'
import SEOHead from '../components/SEOHead.jsx'
import { siteData } from '../utils/constants'

const serviceDetails = {
  'it-consulting': {
    id: 1,
    title: 'IT Consulting',
    tagline: 'Expert Technology Guidance for Your Business',
    description: 'It takes more than skills to find an ideal hire. With our personal approach, expert insights, and talent database, we help you take your IT team to the next level.',
    longDescription: 'Our IT consulting services provide comprehensive solutions to help your organization leverage technology effectively. We combine industry expertise with a deep understanding of your business needs to deliver tailored recommendations and implementations that drive growth and efficiency.',
    benefits: [
      'Access to experienced IT professionals with proven track records',
      'Tailored recruitment strategies aligned with your business goals',
      'Comprehensive candidate screening and assessment',
      'Ongoing support throughout the hiring process',
      'Cultural fit evaluation to ensure long-term success',
      'Competitive market insights and salary benchmarking'
    ],
    services: [
      {
        title: 'Contract-to-Hire',
        description: 'Evaluate candidates through temporary assignments before making permanent offers, reducing hiring risk.'
      },
      {
        title: 'Direct Hire',
        description: 'Full-service permanent placement for critical roles with thorough candidate vetting and onboarding support.'
      },
      {
        title: 'Permanent Placement',
        description: 'Strategic recruitment for long-term positions with focus on cultural alignment and career growth potential.'
      },
      {
        title: 'Executive Search',
        description: 'Specialized recruitment for C-level and senior management positions with confidential search capabilities.'
      }
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'We learn about your business, culture, and specific hiring needs' },
      { step: 2, title: 'Strategy', description: 'Develop a customized recruitment strategy and sourcing plan' },
      { step: 3, title: 'Sourcing', description: 'Leverage our network and database to identify top candidates' },
      { step: 4, title: 'Screening', description: 'Comprehensive evaluation including technical and cultural fit' },
      { step: 5, title: 'Presentation', description: 'Present qualified candidates with detailed profiles and insights' },
      { step: 6, title: 'Support', description: 'Assist with negotiations, onboarding, and follow-up' }
    ]
  },
  'it-training': {
    id: 2,
    title: 'IT Training',
    tagline: 'Empowering Your Workforce with Cutting-Edge Skills',
    description: 'We provide IT training to freshers, job seekers, new recruits, and experienced professionals to enhance their knowledge, efficiency, and productivity.',
    longDescription: 'Our comprehensive IT training programs are designed to upskill your workforce and prepare them for the challenges of modern technology. From foundational concepts to advanced specializations, we offer flexible training solutions that fit your schedule and learning style.',
    benefits: [
      'Industry-certified instructors with real-world experience',
      'Hands-on training with practical exercises and projects',
      'Flexible learning options: on-site, remote, or hybrid',
      'Customized curriculum based on your specific needs',
      'Post-training support and mentorship',
      'Career guidance and certification preparation'
    ],
    services: [
      {
        title: 'Technical Training',
        description: 'Programming languages, frameworks, databases, and development tools for all skill levels.'
      },
      {
        title: 'Project Management',
        description: 'Agile, Scrum, PMP, and other project management methodologies and certifications.'
      },
      {
        title: 'Emerging Technologies',
        description: 'AI/ML, Cloud Computing, Blockchain, IoT, and other cutting-edge technology training.'
      },
      {
        title: 'Management Development',
        description: 'Leadership skills, team management, and strategic planning for IT professionals.'
      }
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current skill levels and identify training needs' },
      { step: 2, title: 'Curriculum Design', description: 'Create customized training program aligned with goals' },
      { step: 3, title: 'Scheduling', description: 'Flexible scheduling to minimize disruption to operations' },
      { step: 4, title: 'Delivery', description: 'Engaging instruction with hands-on labs and exercises' },
      { step: 5, title: 'Evaluation', description: 'Assess learning outcomes and provide feedback' },
      { step: 6, title: 'Certification', description: 'Support for industry certifications and credentials' }
    ]
  },
  'contract-staffing': {
    id: 3,
    title: 'Contract Staffing',
    tagline: 'Flexible Workforce Solutions for Dynamic Needs',
    description: 'Flexible staffing solutions that scale with your business needs, providing skilled professionals for short-term and long-term projects.',
    longDescription: 'Our contract staffing services provide the agility your business needs to respond to market changes, seasonal demands, and project-based work. We maintain a pool of pre-vetted professionals ready to contribute from day one.',
    benefits: [
      'Rapid deployment of qualified professionals',
      'Cost-effective solution for project-based needs',
      'Access to specialized skills without long-term commitment',
      'Flexible contract durations from weeks to months',
      'Reduced hiring and onboarding overhead',
      'Option to convert to permanent placement'
    ],
    services: [
      {
        title: 'Project-Based Hiring',
        description: 'Skilled professionals for specific projects with defined timelines and deliverables.'
      },
      {
        title: 'Temporary Staffing',
        description: 'Short-term coverage for absences, leaves, or temporary workload increases.'
      },
      {
        title: 'Seasonal Support',
        description: 'Additional workforce during peak seasons or business cycles.'
      },
      {
        title: 'Resource Augmentation',
        description: 'Supplement your existing team with specialized skills for specific initiatives.'
      }
    ],
    process: [
      { step: 1, title: 'Requirements', description: 'Define project scope, skills needed, and duration' },
      { step: 2, title: 'Matching', description: 'Identify candidates from our pre-qualified talent pool' },
      { step: 3, title: 'Vetting', description: 'Verify skills, experience, and availability' },
      { step: 4, title: 'Placement', description: 'Quick deployment with streamlined onboarding' },
      { step: 5, title: 'Management', description: 'Ongoing communication and performance monitoring' },
      { step: 6, title: 'Completion', description: 'Project wrap-up and option for extension or conversion' }
    ]
  },
  'permanent-placement': {
    id: 4,
    title: 'Permanent Placement',
    tagline: 'Building Your Team for Long-Term Success',
    description: 'Find the perfect full-time employees who align with your company culture and contribute to long-term success.',
    longDescription: 'Our permanent placement services focus on finding candidates who will thrive in your organization for years to come. We go beyond technical skills to evaluate cultural fit, career aspirations, and long-term potential.',
    benefits: [
      'Comprehensive candidate assessment including soft skills',
      'Cultural fit evaluation to reduce turnover',
      'Thorough background and reference checks',
      'Negotiation support for offers and terms',
      'Onboarding assistance for smooth integration',
      'Replacement guarantee for peace of mind'
    ],
    services: [
      {
        title: 'Full-Time Hiring',
        description: 'End-to-end recruitment for permanent positions across all levels and functions.'
      },
      {
        title: 'Cultural Fit Assessment',
        description: 'Evaluate alignment with company values, work style, and team dynamics.'
      },
      {
        title: 'Background Verification',
        description: 'Comprehensive checks including employment, education, and criminal history.'
      },
      {
        title: 'Onboarding Support',
        description: 'Assistance with new hire integration and initial performance tracking.'
      }
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand role requirements, team dynamics, and culture' },
      { step: 2, title: 'Sourcing', description: 'Multi-channel recruitment and proactive candidate search' },
      { step: 3, title: 'Screening', description: 'Initial interviews and skills assessment' },
      { step: 4, title: 'Evaluation', description: 'In-depth interviews, testing, and reference checks' },
      { step: 5, title: 'Presentation', description: 'Submit shortlisted candidates with detailed profiles' },
      { step: 6, title: 'Integration', description: 'Support offer process and successful onboarding' }
    ]
  },
  'workforce-optimization': {
    id: 5,
    title: 'Workforce Optimization',
    tagline: 'Maximize Productivity and Efficiency',
    description: 'Strategic workforce planning and optimization services to maximize productivity and reduce operational costs.',
    longDescription: 'Our workforce optimization services help organizations achieve more with their existing resources. Through data-driven analysis and strategic planning, we identify opportunities to improve efficiency, reduce costs, and enhance employee satisfaction.',
    benefits: [
      'Data-driven insights into workforce utilization',
      'Cost reduction through optimized resource allocation',
      'Improved employee productivity and satisfaction',
      'Strategic workforce planning for future needs',
      'Technology recommendations for automation',
      'Change management support for implementations'
    ],
    services: [
      {
        title: 'Resource Planning',
        description: 'Strategic allocation of workforce resources aligned with business objectives.'
      },
      {
        title: 'Cost Optimization',
        description: 'Identify and implement cost-saving opportunities without sacrificing quality.'
      },
      {
        title: 'Performance Analysis',
        description: 'Measure and improve individual and team productivity metrics.'
      },
      {
        title: 'Capacity Management',
        description: 'Balance workload distribution and optimize resource utilization.'
      }
    ],
    process: [
      { step: 1, title: 'Analysis', description: 'Assess current workforce structure and performance' },
      { step: 2, title: 'Benchmarking', description: 'Compare against industry standards and best practices' },
      { step: 3, title: 'Strategy', description: 'Develop optimization plan with measurable goals' },
      { step: 4, title: 'Implementation', description: 'Execute changes with minimal disruption' },
      { step: 5, title: 'Training', description: 'Support team adaptation to new processes' },
      { step: 6, title: 'Monitoring', description: 'Track results and make continuous improvements' }
    ]
  },
  'team-building': {
    id: 6,
    title: 'Team Building',
    tagline: 'Creating High-Performing Teams',
    description: 'Build high-performing teams with our expert guidance on team composition, dynamics, and development strategies.',
    longDescription: 'Our team building services focus on creating cohesive, productive teams that achieve exceptional results. We combine organizational psychology with practical experience to help you build teams that work well together and deliver consistently.',
    benefits: [
      'Scientific approach to team composition and dynamics',
      'Improved collaboration and communication',
      'Reduced conflict and enhanced trust',
      'Higher team productivity and morale',
      'Accelerated team formation and integration',
      'Sustainable performance improvement'
    ],
    services: [
      {
        title: 'Team Assessment',
        description: 'Evaluate team strengths, weaknesses, and dynamics using proven frameworks.'
      },
      {
        title: 'Skill Gap Analysis',
        description: 'Identify missing skills and capabilities needed for optimal performance.'
      },
      {
        title: 'Leadership Development',
        description: 'Develop team leaders who inspire and guide their teams effectively.'
      },
      {
        title: 'Culture Building',
        description: 'Create positive team culture aligned with organizational values.'
      }
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current team structure and performance' },
      { step: 2, title: 'Design', description: 'Create optimal team composition and structure' },
      { step: 3, title: 'Recruitment', description: 'Find candidates who complement existing team' },
      { step: 4, title: 'Integration', description: 'Support smooth onboarding and team bonding' },
      { step: 5, title: 'Development', description: 'Ongoing coaching and skill development' },
      { step: 6, title: 'Optimization', description: 'Continuous improvement and adjustment' }
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-500 hover:text-primary-600">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title={`${service.title} | DC Technologies USA`}
        description={service.description}
        keywords={`${service.title}, IT staffing, ${service.title.toLowerCase()}`}
        canonical={`https://dctechnologiesusa.com/services/${slug}`}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24">
          <div className="container-custom">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <FaArrowLeft />
              Back to All Services
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-6">
                {service.tagline}
              </p>
              <p className="text-lg text-primary-50">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/hero-main.jpg" 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-500">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">
                  Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-700">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-700">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {service.services.map((item, index) => (
                <div key={index} className="card p-6 md:p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary-700">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-700">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="card p-6 h-full">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-secondary-700">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {step.step < service.process.length && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-secondary-700 to-secondary-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can help your organization succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact-us" 
                className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
              >
                Contact Us Today
              </Link>
              
              <a 
                href={`tel:${siteData.company.phone}`}
                className="px-8 py-4 bg-white text-secondary-700 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <FaPhone />
                {siteData.company.phone}
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-gray-300 mb-4">Or email us at:</p>
              <a 
                href={`mailto:${siteData.company.email}`}
                className="text-primary-300 hover:text-primary-200 inline-flex items-center gap-2 text-lg"
              >
                <FaEnvelope />
                {siteData.company.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
