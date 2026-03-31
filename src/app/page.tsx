import Link from 'next/link'
import { ROUTES } from '@/config'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">🏥 DoctorKendro</h1>
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.LOGIN}
            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href={ROUTES.REGISTER}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Find Doctors,{' '}
          <span className="text-blue-600">Book Appointments</span>
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Connect with verified doctors, book appointments online, and get
          quality healthcare from the comfort of your home.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={ROUTES.REGISTER}
            className="px-8 py-4 text-white bg-blue-600 rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            Get Started
          </Link>
          <Link
            href="/doctors"
            className="px-8 py-4 text-blue-600 border-2 border-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors text-lg"
          >
            Find Doctors
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Verified Doctors
            </h3>
            <p className="text-gray-500">
              All doctors are verified and certified professionals
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Easy Booking
            </h3>
            <p className="text-gray-500">
              Book appointments in just a few clicks, anytime anywhere
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Online Consultation
            </h3>
            <p className="text-gray-500">
              Consult with doctors via video, audio or chat
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

