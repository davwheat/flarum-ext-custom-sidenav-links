/**
 * Returns `true` if provided a valid URL, else `false`.
 *
 * A URL is considered valid if it...
 * - uses http or https protocols
 * - contains a `.` in the hostname
 * - is parsable with `new URL(...)`
 *
 * @param str URL string
 */
export default function isValidUrl(str: string) {
  let url: URL

  try {
    url = new URL(str)
  } catch (_) {
    return false
  }

  return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.')
}
