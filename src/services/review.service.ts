import axiosInstance from '@/lib/axios'
import { ApiResponse, Review } from '@/types'

export const reviewService = {
  // Create review
  createReview: async (data: {
    appointmentId: string
    rating: number
    comment?: string
  }) => {
    const response = await axiosInstance.post<ApiResponse<Review>>(
      '/reviews',
      data
    )
    return response.data
  },

  // Get doctor reviews
  getDoctorReviews: async (
    doctorId: string,
    params?: { page?: number; limit?: number }
  ) => {
    const response = await axiosInstance.get<ApiResponse<Review[]>>(
      `/reviews/doctor/${doctorId}`,
      { params }
    )
    return response.data
  },

  // Update review
  updateReview: async (
    id: string,
    data: { rating: number; comment?: string }
  ) => {
    const response = await axiosInstance.patch<ApiResponse<Review>>(
      `/reviews/${id}`,
      data
    )
    return response.data
  },
}

