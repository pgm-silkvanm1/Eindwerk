import createMollieClient from '@mollie/api-client'

const mollieApiKey = process.env.MOLLIE_API_KEY
const mollieClient = createMollieClient({
  apiKey: mollieApiKey,
})
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

module.exports = async (req, res) => {
  const { amount, description } = req.body

  const payload = {
    amount: {
      value: parseFloat(amount).toFixed(2),
      currency: 'EUR',
    },
    description,
    redirectUrl: `${baseUrl}/booking/payment`,
    // webhookUrl: `${baseUrl}/api/update-payment`,
  }

  try {
    const payment = await mollieClient.payments.create(payload)
    res.status(200).send({
      id: payment.id,
      checkoutUrl: payment.getCheckoutUrl(),
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }
}
