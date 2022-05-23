// import Mailchimp from 'mailchimp-api-v3'
import mailchimp from '@mailchimp/mailchimp_marketing'
import md5 from 'md5'

const audienceIdDefault = process.env.MAILCHIMP_AUDIENCE_ID
const audienceIdDownloads = process.env.MAILCHIMP_AUDIENCE_ID_DOWNLOADS

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us6',
})

module.exports = async (req, res) => {
  const {
    email,
    status = 'subscribed',
    type = 'default',
    merge_fields = {},
  } = req.body

  const audienceId = {
    default: audienceIdDefault,
    download: audienceIdDownloads,
  }[type]

  if (!email) {
    return res.status(500).send('Email is required')
  }

  if (!audienceId) {
    return res.status(500).send('Unknown audience ID')
  }

  try {
    const response = await mailchimp.lists.setListMember(
      audienceId,
      md5(email.toLowerCase()),
      { email_address: email, status_if_new: status, merge_fields }
    )
    res.status(200).json('ok')
  } catch (err) {
    res.status(err.status).send(err.response.text)
  }
}
