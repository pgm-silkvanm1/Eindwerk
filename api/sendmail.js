import sendgrid from '@sendgrid/mail'

module.exports = async (req, res) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

  const { subject, body } = req.body

  const config = {
    // bcc: {
    //   email: 'debug@maneuver.be',
    //   name: 'Maneuver',
    // },
    to: {
      email: 'debug@maneuver.be',
      // name: '',
    },
    from: {
      email: 'team@maneuver.be',
      name: 'Maneuver',
    },
    subject,
    text: body,
    // templateId: '',
    // dynamicTemplateData: order,
  }

  try {
    await sendgrid.send(config)

    res.status(200).json({ message: 'Mail sent' })
  } catch (err) {
    let msg = 'An unknown error has occured'

    if (err.response.body) {
      msg = err.response.body
    }

    res.status(500).send(msg)
  }
}
