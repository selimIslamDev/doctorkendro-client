'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { appointmentService } from '@/services/appointment.service'
import { Card, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import Spinner from '@/components/ui/Spinner'
import Button from '@/components/ui/Button'
import { formatDateTime, getAppointmentTypeLabel } from '@/utils'
import { Calendar, Clock, MapPin, Video } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'

const STATUS_TABS = [
  { value: '', label: 'All' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'CONFIRMED', label: 'Confirmed' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'CANCELLED', label: 'Cancelled' },
]

export default function PatientAppointmentsPage() {
  const [activeTab, setActiveTab] = useState('')
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['my-appointments', activeTab],
    queryFn: () =>
      appointmentService.getMyAppointments({
        status: activeTab || undefined,
      }),
  })

  const cancelMutation = useMutation({
    mutationFn: (id: string) =>
      appointmentService.cancelAppointment(id, 'Cancelled by patient'),
    onSuccess: () => {
      toast.success('Appointment cancelled')
      queryClient.invalidateQueries({ queryKey: ['my-appointments'] })
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to cancel')
    },
  })

  const appointments = data?.data || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
          <Link href="/doctors">
            <Button size="sm">Find Doctor</Button>
          </Link>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Spinner size="lg" />
          </div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-20">
            <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No appointments found</p>
            <Link href="/doctors">
              <Button className="mt-4" variant="outline">
                Book an Appointment
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {appointments.map((apt) => (
              <Card key={apt.id}>
                <CardBody>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Avatar
                        src={(apt.doctor as any)?.avatarUrl}
                        firstName={(apt.doctor as any)?.firstName || 'D'}
                        lastName={(apt.doctor as any)?.lastName || 'R'}
                        size="md"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Dr. {(apt.doctor as any)?.firstName}{' '}
                          {(apt.doctor as any)?.lastName}
                        </h3>
                        {(apt.doctor as any)?.specializations?.[0] && (
                          <p className="text-blue-600 text-sm">
                            {
                              (apt.doctor as any).specializations[0]
                                .specialization.name
                            }
                          </p>
                        )}

                        <div className="flex flex-wrap gap-3 mt-2">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock size={14} />
                            {formatDateTime(apt.scheduledAt)}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            {apt.type === 'IN_PERSON' ? (
                              <MapPin size={14} />
                            ) : (
                              <Video size={14} />
                            )}
                            {getAppointmentTypeLabel(apt.type)}
                          </div>
                        </div>

                        {apt.notes && (
                          <p className="text-sm text-gray-400 mt-1">
                            {apt.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <Badge
                        variant={
                          apt.status === 'COMPLETED'
                            ? 'success'
                            : apt.status === 'CONFIRMED'
                            ? 'info'
                            : apt.status === 'CANCELLED'
                            ? 'danger'
                            : 'warning'
                        }
                      >
                        {apt.status}
                      </Badge>

                      {['PENDING', 'CONFIRMED'].includes(apt.status) && (
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => cancelMutation.mutate(apt.id)}
                          isLoading={cancelMutation.isPending}
                        >
                          Cancel
                        </Button>
                      )}

                      {apt.status === 'COMPLETED' && !apt.review && (
                        <Link
                          href={`/patient/review?appointmentId=${apt.id}&doctorId=${apt.doctorId}`}
                        >
                          <Button variant="outline" size="sm">
                            Write Review
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

