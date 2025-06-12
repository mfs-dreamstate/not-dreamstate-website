import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 mb-6">
            Not Dreamstate
          </h1>
          <p className="text-large text-[#666666] max-w-3xl mx-auto mb-8">
            Welcome to our website
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">
              Welcome to Not Dreamstate
            </h2>
            <p className="text-large text-[#666666] max-w-3xl mx-auto">
              We specialize in technology solutions that bring families closer together through shared hobbies and experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-h3 mb-4">Family Focus</h3>
              <p className="text-body text-[#666666]">
                Our target customers are families with children aged 30-40 who want to start a family hobby together.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-h3 mb-4">Technology</h3>
              <p className="text-body text-[#666666]">
                We leverage technology to create meaningful connections and experiences for families.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-h3 mb-4">Quality Services</h3>
              <p className="text-body text-[#666666]">
                We provide quality services designed to help families discover and enjoy new activities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-h2 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-large text-[#666666] max-w-2xl mx-auto mb-8">
            Contact us today to learn more about how we can help your family discover new hobbies and create lasting memories together.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}