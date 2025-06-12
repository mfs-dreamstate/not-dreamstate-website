'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 mb-6">
            Contact Us
          </h1>
          <p className="text-large text-[#666666] max-w-3xl mx-auto">
            Ready to start your family hobby adventure? Get in touch with us today to learn more about our solution packages and how we can help your family create lasting memories together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-h2 mb-6">
                Send us a Message
              </h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input resize-vertical"
                    placeholder="Tell us about your family and what hobby you're interested in..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-h3 mb-4">
                  Get in Touch
                </h3>
                <p className="text-body text-[#666666] mb-6">
                  We&apos;d love to hear from you! Whether you have questions about our services, need help choosing the right family hobby package, or want to learn more about what we offer, don&apos;t hesitate to reach out.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#95E1D3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      @
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">Email</p>
                      <a href="mailto:pdm@dreamstate.dk" className="text-[#95E1D3] hover:text-[#62aea0]">
                        pdm@dreamstate.dk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#95E1D3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      📞
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">Phone</p>
                      <a href="tel:61750924" className="text-[#95E1D3] hover:text-[#62aea0]">
                        61750924
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-h3 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3 text-body text-[#666666]">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">✓</span>
                    Get personalized recommendations for your family
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">✓</span>
                    Learn about our complete solution packages
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">✓</span>
                    Ask questions about specific hobbies
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-[#95E1D3] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">✓</span>
                    Get expert guidance for getting started
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours / Additional Info */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-h2 mb-6">
            Ready to Bring Your Family Together?
          </h2>
          <p className="text-large text-[#666666] max-w-3xl mx-auto mb-8">
            Our team is here to help you find the perfect hobby package for your family. We understand that every family is unique, and we&apos;re committed to helping you create meaningful experiences together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:pdm@dreamstate.dk" className="btn-primary">
              Email Us Now
            </a>
            <a href="tel:61750924" className="btn-secondary">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}