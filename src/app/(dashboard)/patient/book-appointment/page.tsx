'use client'

import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useSearchParams, useRouter } from 'next/navigation'
import { doctorService } from '@/services/doctor.service'
import { appointmentService } from '@/services/appointment.service'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'
import { MapPin, Video, MessageCircle, Phone } from 'lucide-react'
import { formatCurrency } from '@/utils'
import toast from 'react-hot-toast'
import { ROUTES } from '@/config'

const APPOINTMENT_TYPES = [
  { value: 'IN_PERSON', label: 'In Person', icon: MapPin, color: 'blue' },
  { value: 'VIDEO', label: 'Video Call', icon: Video, color: 'green' },
  { value: 'AUDIO', label: 'Audio Call', icon: Phone, color: 'purple' },
  { value: 'CHAT', label: 'Chat', icon: MessageCircle, color: 'orange' },
]

export default function BookAppointmentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const doctorId = searchParams.get('doctorId') || ''

  const [selectedType, setSelectedType] = useState('IN_PERSON')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [notes, setNotes] = useState('')

  const { data: doctorData, isLoading } = useQuery({
    queryKey: ['doctor', doctorId],
    queryFn: () => doctorService.getDoctorProfile(doctorId),
    enabled: !!doctorId,
  })

  const bookMutation = useMutation({
    mutationFn: () =>
      appointmentService.bookAppointment({
        doctorId,
        type: selectedType as any,
        scheduledAt: `${selectedDate}T${selectedTime}:00.000Z`,
        notes: notes || undefined,
      }),
    onSuccess: () => {
      toast.success('Appointment booked successfully!')
      router.replace(ROUTES.PATIENT_APPOINTMENTS)
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to book appointment')
    },
  })

  const doctor = doctorData?.data

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Doctor not found</p>
      </div>
    )
  }

  const getFee = () => {
    if (selectedType === 'IN_PERSON') return doctor.inPersonFee
    return doctor.onlineFee
  }

  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select date and time')
      return
    }
    bookMutation.mutate()
  }

  // Generate time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '14:00', '14:30', '15:00', '15:30', '16:00',
    '16:30', '17:00',
  ]

  // Min date = today
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Book Appointment
        </h1>

        {/* Doctor Info */}
        <Card className="mb-6">
          <CardBody>
            <div className="flex items-center gap-4">
              <Avatar
                src={doctor.avatarUrl}
                firstName={doctor.firstName}
                lastName={doctor.lastName}
                size="lg"
              />
              <div>
                <h2 className="font-semibold text-gray-900">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h2>
                {doctor.specializations && doctor.specializations.length > 0 && (
                  <p className="text-blue-600 text-sm">
                    {doctor.specializations[0].specialization.name}
                  </p>
                )}
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Appointment Type */}
        <Card className="mb-6">
          <CardHeader>
            <h3 className="font-semibold text-gray-900">
              Select Appointment Type
            </h3>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 gap-3">
              {APPOINTMENT_TYPES.map((type) => {
                const Icon = type.icon
                const isDisabled =
                  (type.value !== 'IN_PERSON' && !doctor.isAvailableOnline)
                return (
                  <button
                    key={type.value}
                    disabled={isDisabled}
                    onClick={() => setSelectedType(type.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <Icon
                      size={20}
                      className={
                        selectedType === type.value
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }
                    />
                    <p className="font-medium text-gray-900 mt-2">
                      {type.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {type.value === 'IN_PERSON'
                        ? formatCurrency(doctor.inPersonFee)
                        : formatCurrency(doctor.onlineFee)}
                    </p>
                  </button>
                )
              })}
            </div>
          </CardBody>
        </Card>

        {/* Date Selection */}
        <Card className="mb-6">
          <CardHeader>
            <h3 className="font-semibold text-gray-900">Select Date</h3>
          </CardHeader>
          <CardBody>
            <input
              type="date"
              min={today}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </CardBody>
        </Card>

        {/* Time Selection */}
        {selectedDate && (
          <Card className="mb-6">
            <CardHeader>
              <h3 className="font-semibold text-gray-900">Select Time</h3>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>
        )}

        {/* Notes */}
        <Card className="mb-6">
          <CardHeader>
            <h3 className="font-semibold text-gray-900">
              Notes (Optional)
            </h3>
          </CardHeader>
          <CardBody>
            <textarea
              placeholder="Describe your symptoms or reason for visit..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />
          </CardBody>
        </Card>

        {/* Summary & Book */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Consultation Fee</span>
              <span className="font-bold text-gray-900 text-lg">
                {formatCurrency(getFee())}
              </span>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleBook}
              isLoading={bookMutation.isPending}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Appointment
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

