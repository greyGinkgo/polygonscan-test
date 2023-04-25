require('dotenv').config()

const apiKey = process.env.POLYGONSCAN_API_KEY

fetch(
  `https://api.polygonscan.com/api?module=stats&action=maticprice&apikey=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => console.table(data))
