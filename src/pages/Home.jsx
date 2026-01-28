import SEOHead from '../components/SEOHead.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Services from '../components/Services/Services.jsx'
import About from '../components/About/About.jsx'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import { pageSEO, organizationSchema, websiteSchema, breadcrumbSchemas } from '../utils/seo'

export default function Home() {
  const combinedSchema = [organizationSchema, websiteSchema, breadcrumbSchemas.home]

  return (
    <>
      <SEOHead
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        canonical={pageSEO.home.canonical}
        ogType={pageSEO.home.ogType}
        schema={combinedSchema}
      />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
    </>
  )
}
