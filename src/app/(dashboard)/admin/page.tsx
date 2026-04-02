'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/lib/axios'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import Spinner from '@/components/ui/Spinner'
import Button from '@/components/ui/Button'
import { Users, UserCheck, Calendar, Clock } from 'lucide-react'
import toast from 'react-hot-toast'
import { useState } from 'react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'users' | 'doctors'>('doctors')
  const queryClient = useQueryClient()

  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axios.get('/admin/stats')
      return res.data
    },
  })

  const { data: doctorsData, isLoading: doctorsLoading } = useQuery({
    queryKey: ['admin-doctors', 'PENDING'],
    queryFn: async () => {
      const res = await axios.get('/admin/doctors?verificationStatus=PENDING')
      return res.data
    },
  })

  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const res = await axios.get('/admin/users')
      return res.data
    },
  })

  const verifyMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const res = await axios.patch(`/admin/doctors/${id}/verify`, { status })
      return res.data
    },
    onSuccess: () => {
      toast.success('Doctor status updated!')
      queryClient.invalidateQueries({ queryKey: ['admin-doctors'] })
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] })
    },
    onError: () => toast.error('Failed to update status'),
  })

  const toggleStatusMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.patch(`/admin/users/${id}/toggle-status`)
      return res.data
    },
    onSuccess: () => {
      toast.success('User status updated!')
      queryClient.invalidateQueries({ queryKey: ['admin-users'] })
    },
    onError: () => toast.error('Failed to update status'),
  })

  const stats = statsData?.data
  const doctors = doctorsData?.data || []
  const users = usersData?.data || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        {statsLoading ? (
          <div className="flex justify-center py-8">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardBody className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Doctors</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalDoctors || 0}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <UserCheck className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalPatients || 0}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalAppointments || 0}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Clock className="text-yellow-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pending Verifications</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.pendingVerifications || 0}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'doctors'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            Pending Doctors
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            All Users
          </button>
        </div>

        {/* Pending Doctors */}
        {activeTab === 'doctors' && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-gray-900">
                Pending Doctor Verifications
              </h2>
            </CardHeader>
            <CardBody>
              {doctorsLoading ? (
                <div className="flex justify-center py-8">
                  <Spinner />
                </div>
              ) : doctors.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No pending verifications
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  {doctors.map((doctor: any) => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={doctor.avatarUrl}
                          firstName={doctor.firstName}
                          lastName={doctor.lastName}
                          size="md"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            Dr. {doctor.firstName} {doctor.lastName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {doctor.user?.email}
                          </p>
                          {doctor.qualifications?.length > 0 && (
                            <p className="text-xs text-gray-400">
                              {doctor.qualifications[0].degree} —{' '}
                              {doctor.qualifications[0].institution}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            verifyMutation.mutate({
                              id: doctor.id,
                              status: 'VERIFIED',
                            })
                          }
                          isLoading={verifyMutation.isPending}
                        >
                          Verify
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() =>
                            verifyMutation.mutate({
                              id: doctor.id,
                              status: 'REJECTED',
                            })
                          }
                          isLoading={verifyMutation.isPending}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardBody>
          </Card>
        )}

        {/* All Users */}
        {activeTab === 'users' && (
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-gray-900">All Users</h2>
            </CardHeader>
            <CardBody>
              {usersLoading ? (
                <div className="flex justify-center py-8">
                  <Spinner />
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {users.map((user: any) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {user.patient?.firstName?.charAt(0) ||
                              user.doctor?.firstName?.charAt(0) ||
                              'U'}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.patient
                              ? `${user.patient.firstName} ${user.patient.lastName}`
                              : user.doctor
                              ? `Dr. ${user.doctor.firstName} ${user.doctor.lastName}`
                              : user.email}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            user.role === 'DOCTOR'
                              ? 'info'
                              : user.role === 'SUPER_ADMIN'
                              ? 'warning'
                              : 'default'
                          }
                        >
                          {user.role}
                        </Badge>
                        <Badge
                          variant={user.isActive ? 'success' : 'danger'}
                        >
                          {user.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        <Button
                          size="sm"
                          variant={user.isActive ? 'danger' : 'outline'}
                          onClick={() => toggleStatusMutation.mutate(user.id)}
                          isLoading={toggleStatusMutation.isPending}
                        >
                          {user.isActive ? 'Deactivate' : 'Activate'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}

