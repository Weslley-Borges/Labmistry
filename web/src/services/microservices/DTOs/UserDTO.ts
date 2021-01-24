export default interface RegisterValuesDTO {
  username: string
  email: string
  password: string
  confirmPassword: string
  geoState: string
  school: string
}

export default interface AuthValuesDTO {
  email: string
  password: string
}
