import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID oRuUQQWs-M2jBjkDHtVy9QSrzvrFVAP2QgBfuzKTZsc',
  },
})
