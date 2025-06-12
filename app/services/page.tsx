import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 mb-6">
            Our Services
          </h1>
          <p className="text-large text-[#666666] max-w-3xl mx-auto">
            We provide quality services designed to help families discover and enjoy new hobbies together. Our comprehensive solution packages make it easy to get started with activities that bring your family closer.
          </p>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <h2 className="text-h2 mb-6">
                Our Services
              </h2>
              <p className="text-large text-[#666666] mb-8">
                We provide quality services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-h3 mb-4">Complete Solution Packages</h3>
                  <p className="text-body text-[#666666] mb-4">
                    Our packages include everything your family needs to get started with a new hobby, from guides to essential products.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-h3 mb-4">Expert Guidance</h3>
                  <p className="text-body text-[#666666] mb-4">
                    We provide comprehensive guides and expert advice to help families successfully begin their chosen activities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-h3 mb-4">Family-Focused Activities</h3>
                  <p className="text-body text-[#666666] mb-4">
                    All our services are designed specifically for families with children, ensuring activities are suitable for all ages.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-h3 mb-4">Easy Start Process</h3>
                  <p className="text-body text-[#666666] mb-4">
                    We make it simple for families to begin new hobbies with clear instructions and all necessary materials included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Activities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">
              Example Family Activities
            </h2>
            <p className="text-large text-[#666666] max-w-3xl mx-auto">
              We offer solution packages for various family hobbies. Here&apos;s an example of the type of activities we help families get started with.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-h3 mb-4">
                Amber Hunting (Rav Jagt)
              </h3>
              <p className="text-body text-[#666666] mb-6">
                One example of our family hobby packages is amber hunting. This activity is perfect for families who want to explore nature together while searching for these beautiful natural treasures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2 text-body text-[#666666]">
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Comprehensive guide to amber hunting
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Essential tools and equipment
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Location recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Safety guidelines for families
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-body text-[#666666]">
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Quality time outdoors together
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Educational experience for children
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Creates lasting family memories
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">•</span>
                      Encourages exploration and discovery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom text-center">
          <h2 className="text-h2 mb-6">
            Ready to Start Your Family Adventure?
          </h2>
          <p className="text-large text-[#666666] max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our service packages and how we can help your family discover new hobbies together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}