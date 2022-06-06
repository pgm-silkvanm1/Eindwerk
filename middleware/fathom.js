export default function (context) {
  if (!process.client) {
    return
  }
  if (typeof window.fathom !== 'undefined') {
    window.fathom.trackPageview()
  }

  if (process.dev) {
    console.log(
      '%cFATHOM',
      'background:#666; color:#fff; font-weight:bold; padding:3px 6px; border-radius:4px;',
      'tracked page view'
    )
  }
}
