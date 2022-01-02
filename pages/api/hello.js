// req = HTTP imcomming message, res = HTTP server response
export default function handler(req, res) {
  res.status(200).json({text: 'Hello'})
}