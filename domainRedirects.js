export default function (req, res, next) {
  if (req.headers.host == 'domain.be') {
    res.writeHead(301, { Location: 'https://www.domain.be' + req.originalUrl })
    res.end()
    return
  }
  next()
}
