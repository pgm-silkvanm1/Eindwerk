import axios from 'axios'
export async function validateRecaptcha(recaptcha) {
  const token = await recaptcha.execute()

  if (token) {
    const response = await axios.get('/api/recaptcha', {
      params: {
        token,
      },
    })
    return response?.data?.success
  }
}

export default validateRecaptcha
