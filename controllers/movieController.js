const axios = require("axios")

const API_URL = "http://www.omdbapi.com/"
const API_KEY = process.env.OMDB_API_KEY


exports.searchMovies = async (req, res) => {
  const { title } = req.query

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required"
    })
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        s: title,
        apikey: API_KEY
      }
    })

    res.json(response.data)

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch movie data"
    })
  }
}


exports.getMovieDetails = async (req, res) => {
  const { id } = req.params

  try {
    const response = await axios.get(API_URL, {
      params: {
        i: id,
        apikey: API_KEY
      }
    })

    res.json(response.data)

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch movie details"
    })
  }
}