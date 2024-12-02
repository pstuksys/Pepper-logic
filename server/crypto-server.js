const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();


const app = express();
const PORT = process.env.REACT_APP_API_PORT || 5000;
// const secretKey = process.env.REACT_APP_API_SECRET_KEY;

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.post(`/api/crypto-server`, async (req, res) => {
    const body = req?.body;;
    console.log({code:body});

    try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL || 'https://api.livecoinwatch.com'}/coins/map`,
          {
            "currency": "EUR",
            "codes": body.code,
            "sort": "rank",
            "order": "ascending",
            "offset": 0,
            "limit": 0,
            "meta": false
          },
          {
            headers: {
              'x-api-key': `${req?.body?.secret || ''}`,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log({response:response.data});
    
        res.status(200).json({
          message: 'Request successful!',
          data: response.data,
        });
      } catch (error) {
        console.error('Error with third-party API:', error);
        res.status(500).json({
          message: 'Failed to communicate with the third-party API.',
        });
      }

  });


