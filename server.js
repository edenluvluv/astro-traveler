const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const apiKey = 'fc1e127af9212921e0257e83ec25f717';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
