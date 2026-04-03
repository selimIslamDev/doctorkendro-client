import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/common/Navbar'
import Footer from '@/layouts/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DoctorKendro — Find Doctors, Book Appointments',
  description:
    'DoctorKendro is a healthcare platform to find doctors, book appointments, and consult online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Providers>{children}</Providers>
  
      </body>
    </html>
  )
}