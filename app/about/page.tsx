import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 mb-6">
              About Us
            </h1>
            <p className="text-large text-[#666666] leading-relaxed">
              Learn more about us Vi vil bringe familier tættere sammen ved at tilbydde pakkeløsninger der gør at man kan komme nemt i gang med en familie hobby. Det kunne f.eks. være guides og produkter til at starte med at gå på rav jagt.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Our Mission
              </h2>
              <p className="text-body text-[#666666] mb-6">
                We are dedicated to bringing families closer together by offering comprehensive solution packages that make it easy to get started with family hobbies.
              </p>
              <p className="text-body text-[#666666] mb-6">
                For example, we provide guides and products to help families start activities like amber hunting, creating shared experiences and lasting memories.
              </p>
              <p className="text-body text-[#666666]">
                Our focus is on making family activities accessible, enjoyable, and meaningful for everyone involved.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-h3 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-4 text-body text-[#666666]">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">✓</span>
                  Complete solution packages for family hobbies
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">✓</span>
                  Expert guides and quality products
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">✓</span>
                  Focus on bringing families together
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">✓</span>
                  Easy to get started approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-6">
              Who We Serve
            </h2>
            <p className="text-large text-[#666666] mb-8">
              Our ideal customer is between 30-40 years old, has one or more children, and wants to get started with a hobby for the whole family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <h3 className="text-h3 mb-4">Parents</h3>
                <p className="text-body text-[#666666]">
                  Adults aged 30-40 looking for meaningful activities to share with their children
                </p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-h3 mb-4">Families</h3>
                <p className="text-body text-[#666666]">
                  Families with children who want to create stronger bonds through shared experiences
                </p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-h3 mb-4">Hobby Enthusiasts</h3>
                <p className="text-body text-[#666666]">
                  Those seeking to start new hobbies that everyone in the family can enjoy together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom text-center">
          <h2 className="text-h2 mb-6">
            Ready to Start Your Family Hobby?
          </h2>
          <p className="text-large text-[#666666] max-w-2xl mx-auto mb-8">
            Get in touch with us today to learn more about our solution packages and how we can help your family get started with a new hobby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}