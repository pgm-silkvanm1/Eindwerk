import createMollieClient from '@mollie/api-client'

const mollieApiKey = process.env.MOLLIE_API_KEY
const mollieClient = createMollieClient({
  apiKey: mollieApiKey,
})
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

module.exports = async (req, res) => {
  const { id } = req.query

  try {
    const payment = await mollieClient.payments.get(id)
    res.status(200).send(payment)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
