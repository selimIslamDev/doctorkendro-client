'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const footerData = {
  specialities: [
    'Gynecologist', 'Dermatologist', 'Cardiologist', 'Neurologist',
    'Orthopedic Surgeon', 'General Physician', 'Pediatrician', 'Psychiatrist',
  ],
  cities: [
    'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi',
    'Khulna', 'Barishal', 'Rangpur', 'Cumilla',
  ],
  services: [
    'Video Consultation', 'Book Appointment', 'Lab Tests', 'Medicine Delivery',
    'Health Packages', 'Hospital List', 'Doctor Blog',
  ],
  company: [
    'About Us', 'Contact Us', 'Terms & Conditions', 'Privacy Policy',
    'Join as a Doctor', 'Refund Policy', 'Careers',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <span className="text-white font-bold text-lg leading-none">D</span>
              </div>
              <span className="text-white font-bold text-lg">DoctorKendro</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Find the best doctors and hospitals in Bangladesh. Book appointments
              and consult online with ease.
            </p>
           <div className="flex gap-4">
  <Link href="#" className="hover:text-blue-500 transition-colors">
    <FaFacebook size={20} />
  </Link>
  <Link href="#" className="hover:text-blue-400 transition-colors">
    <FaTwitter size={20} />
  </Link>
  <Link href="#" className="hover:text-pink-500 transition-colors">
    <FaInstagram size={20} />
  </Link>
  <Link href="#" className="hover:text-blue-600 transition-colors">
    <FaLinkedin size={20} />
  </Link>
</div>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-xs tracking-wider">
              Top Specialities
            </h3>
            <ul className="space-y-3 text-sm">
              {footerData.specialities.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-xs tracking-wider">
              Doctors in Cities
            </h3>
            <ul className="space-y-3 text-sm">
              {footerData.cities.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-500 transition-colors">
                    Doctors in {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-xs tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {footerData.services.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="hidden lg:block">
            <h3 className="text-white font-semibold mb-5 uppercase text-xs tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerData.company.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Contact & App Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-500" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              <span>support@doctorkendro.com</span>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="flex gap-4">
            <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-xs">
                Download on the
                <div className="text-sm font-bold text-white">App Store</div>
              </div>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-xs">
                Get it on
                <div className="text-sm font-bold text-white">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-8">
          <p>
            © {new Date().getFullYear()} DoctorKendro. All rights reserved. Your
            health, our priority.
          </p>
        </div>
      </div>
    </footer>
  )
}