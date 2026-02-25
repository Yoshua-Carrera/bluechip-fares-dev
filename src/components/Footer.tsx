import { allServices } from 'content-collections'
import { Link } from '@tanstack/react-router'
import BluechipLogoComplete from '../assets/bluechip-fares-logo-complete.svg?react'

export default function Footer() {
  return (
    <div className="pt-8">
      <hr />
      <footer className="bg-gradient-to-br dark:from-card dark:to-charcoal-80 light:from-card/50 light:to-copper/10 py-16 text-white shadow-sm shadow-copper">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <BluechipLogoComplete className="h-55  light:[--logo-fill-cls-2:var(--logo)] light:[--logo-fill-cls-3:var(--logo)] light:[--logo-stroke-cls-1:var(--logo)] " />
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <a
                href="/contact-us"
                className="text-white font-bold light:text-black hover:text-copper"
              >
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              </a>
              <p className="text-gray-400 light:text-black">123 Main Street</p>
              <p className="text-gray-400 light:text-black">Anytown, USA 12345</p>
              <p className="text-gray-400 light:text-black">Phone: (123) 456-7890</p>
              <p className="text-gray-400 light:text-black">
                Email:{' '}
                <a href="mailto:contact@bluechipfares.com" className="hover:text-copper">
                  contact@bluechipfares.com
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <a
                href="/services-offered/all"
                className="text-white font-bold light:text-black hover:text-copper"
              >
                <h3 className="text-lg font-semibold mb-4 light:text-black">Our Services</h3>
              </a>
              <ul>
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to="/services-offered/$slug"
                      params={{ slug: service.slug }}
                      className="text-gray-400 light:text-black hover:text-copper"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4 light:text-black">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 light:text-black hover:text-copper">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 light:text-black hover:text-copper">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 light:text-black hover:text-copper">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400/50 light:text-black/50">
            <p className="flex justify-center items-center">
              <p>&copy; 2025 Bluechip Fares. All rights reserved. </p>
            </p>{' '}
          </div>
        </div>
      </footer>
    </div>
  )
}
