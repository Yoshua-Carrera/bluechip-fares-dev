export interface ContactUsRequest {
  name: string
  email: string
  phone: string
  image: string
  inquiry: string
}

export interface ContactUsResponse {
  status: 'SUCCESS' | 'ERROR'
  message: string
}
