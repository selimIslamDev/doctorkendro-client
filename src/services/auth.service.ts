import axiosInstance from '@/lib/axios'
import { ApiResponse, AuthResponse, User } from '@/types'
import { LoginForm, RegisterForm } from '@/types'

export const authService = {
  // Register with email
  registerWithEmail: async (data: RegisterForm) => {
    const response = await axiosInstance.post<ApiResponse<User>>(
      '/auth/register/email',
      data
    )
    return response.data
  },

  // Login with email
  loginWithEmail: async (data: LoginForm) => {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      '/auth/login/email',
      data
    )
    return response.data
  },

  // Logout
  logout: async () => {
    const response = await axiosInstance.post<ApiResponse<null>>(
      '/auth/logout'
    )
    return response.data
  },

  // Get current user
  getMe: async () => {
    const response = await axiosInstance.get<ApiResponse<User>>('/auth/me')
    return response.data
  },

  // Forgot password
  forgotPassword: async (email: string) => {
    const response = await axiosInstance.post<ApiResponse<null>>(
      '/auth/forgot-password',
      { email }
    )
    return response.data
  },

  // Reset password
  resetPassword: async (data: {
    email: string
    otp: string
    newPassword: string
  }) => {
    const response = await axiosInstance.post<ApiResponse<null>>(
      '/auth/reset-password',
      data
    )
    return response.data
  },
}

