const { send } = require('micro')
const { parse } = require('url')
const cache = require('memory-cache')
const axios = require('axios')

module.exports = async (req, res) => {
  const { query: { username } } = parse(req.url, true)
  if (!username) return send(res, 401, { message: 'Please supply a valid twitch username in the query parameter.' })

  const rateLimit = 500
  const api = axios.create()
  api.defaults.baseURL = `https://api.twitch.tv/kraken/`
  api.defaults.headers.common['Client-ID'] = 'itj9pv9n9o7ze5796volok7guhbpvs'
  api.interceptors.request.use(rateLimit)

  try {
    profile = await api.get(`streams/${username}`)
    data = profile.data.stream ? profile.data.stream : 'offline'
    statusCode = profile.data.stream ? 401 : 200
  } catch (err) {
    statusCode = 401
  }

  send(res, statusCode, data)
}