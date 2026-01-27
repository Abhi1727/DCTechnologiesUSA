import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SEOHead from '../components/SEOHead.jsx'
import { pageSEO, breadcrumbSchemas } from '../utils/seo'

const teamMembers = [
  {
    id: 1,
    name: 'John Anderson',
    role: 'Chief Executive Officer',
    bio: 'With over 20 years of experience in the staffing industry, John leads our vision for excellence.',
    image: '/team-1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Director of Operations',
    bio: 'Sarah ensures seamless delivery of our services and maintains the highest quality standards.',
    image: '/team-2.jpg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Technical Recruiter',
    bio: 'Michael specializes in sourcing top-tier technical talent across various IT domains.',
    image: '/team-3.jpg',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Client Relations Manager',
    bio: 'Emily builds and maintains strong relationships with our valued client partners.',
    image: '/team-4.jpg',
  },
  {
    id: 5,
    name: 'David Thompson',
    role: 'IT Training Consultant',
    bio: '15+ years of experience in IT training and professional development programs.',
    image: '/team-5.jpg',
  },
  {
    id: 6,
    name: 'Lisa Park',
    role: 'Talent Acquisition Specialist',
    bio: 'Lisa connects exceptional candidates with outstanding career opportunities.',
    image: '/team-6.jpg',
  },
]

export default function OurTeam() {
  return (
    <>
      <SEOHead
        title={pageSEO.ourTeam.title}
        description={pageSEO.ourTeam.description}
        keywords={pageSEO.ourTeam.keywords}
        canonical={pageSEO.ourTeam.canonical}
        schema={breadcrumbSchemas.ourTeam}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300">
              Expert professionals dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-secondary-700">
              The Faces Behind Our Success
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our team of experienced professionals brings together decades of combined expertise in IT consulting, recruiting, and workforce solutions. We're passionate about connecting great people with great opportunities.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                {/* Team Member Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-700 mb-1 group-hover:text-primary-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our team. If you're passionate about helping others succeed, we'd love to hear from you.
            </p>
            <a href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
