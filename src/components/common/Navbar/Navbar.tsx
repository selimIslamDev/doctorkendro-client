'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Phone, Menu, X, ChevronDown, LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { APP_NAME, ROUTES } from '@/config'
import Avatar from '@/components/ui/Avatar'

const navLinks = [
  { name: 'Find Doctors', href: '/doctors', hasDropdown: false },
  { name: 'Hospitals', href: '#', hasDropdown: false },
  { name: 'Lab Tests', href: '#', hasDropdown: false },
  { name: 'Medicines', href: '#', hasDropdown: false },
  { name: 'Health Forum', href: '#', hasDropdown: false },
  { name: 'Health Blog', href: '#', hasDropdown: false },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout, isLoggingOut } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const profile = user?.patient || user?.doctor

  const getDashboardRoute = () => {
    if (user?.role === 'PATIENT') return ROUTES.PATIENT_DASHBOARD
    if (user?.role === 'DOCTOR') return ROUTES.DOCTOR_DASHBOARD
    if (user?.role === 'SUPER_ADMIN') return ROUTES.ADMIN_DASHBOARD
    return '/'
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <span className="text-white font-bold text-lg leading-none">D</span>
            </div>
            <span className="text-blue-600 font-bold text-lg tracking-tight">
              {APP_NAME}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && user && profile ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Avatar
                    src={(profile as any).avatarUrl}
                    firstName={(profile as any).firstName}
                    lastName={(profile as any).lastName}
                    size="sm"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {(profile as any).firstName}
                  </span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="font-semibold text-gray-900 text-sm">
                        {(profile as any).firstName} {(profile as any).lastName}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        router.push(getDashboardRoute())
                        setShowDropdown(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User size={16} className="text-gray-400" />
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        logout()
                        setShowDropdown(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50"
                    >
                      <LogOut size={16} />
                      {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Join as Doctor
                </Link>
                <div className="bg-blue-600 p-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  <Phone size={16} className="text-white" />
                </div>
                <Link
                  href={ROUTES.LOGIN}
                  className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-all"
                >
                  Login
                </Link>
                <Link
                  href={ROUTES.REGISTER}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Phone size={16} className="text-white" />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 hover:bg-gray-50 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-sm font-medium text-gray-600 border-b border-gray-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <Link
                    href={getDashboardRoute()}
                    className="w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="w-full text-center border border-red-500 text-red-500 py-2.5 rounded-lg font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={ROUTES.LOGIN}
                    className="w-full text-center border border-blue-600 text-blue-600 py-2.5 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href={ROUTES.REGISTER}
                    className="w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar