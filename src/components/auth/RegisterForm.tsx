'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/config'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[0-9]/, 'Must contain a number'),
  role: z.enum(['PATIENT', 'DOCTOR']),
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterForm() {
  const { register: registerUser, isRegistering } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: 'PATIENT' },
  })

  const selectedRole = watch('role')

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data)
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
        <p className="text-gray-500 mt-2">Join DoctorKendro today</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Role Selection */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {}}
            className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
              selectedRole === 'PATIENT'
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              value="PATIENT"
              className="hidden"
              {...register('role')}
            />
            🧑‍⚕️ I am a Patient
          </button>
          <button
            type="button"
            onClick={() => {}}
            className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
              selectedRole === 'DOCTOR'
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              value="DOCTOR"
              className="hidden"
              {...register('role')}
            />
            👨‍⚕️ I am a Doctor
          </button>
        </div>

        <div className="flex gap-3">
          <Input
            label="First Name"
            placeholder="John"
            error={errors.firstName?.message}
            required
            {...register('firstName')}
          />
          <Input
            label="Last Name"
            placeholder="Doe"
            error={errors.lastName?.message}
            required
            {...register('lastName')}
          />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          required
          {...register('email')}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Min 8 chars, 1 uppercase, 1 number"
          error={errors.password?.message}
          required
          {...register('password')}
        />

        <Button
          type="submit"
          size="lg"
          isLoading={isRegistering}
          className="w-full mt-2"
        >
          Create Account
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{' '}
        <Link
          href={ROUTES.LOGIN}
          className="text-blue-600 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

