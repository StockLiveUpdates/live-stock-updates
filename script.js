'use strict';
var request = require('request');

// Replace "demo" with your actual API key
var apiKey = 'TKCQJVCWL1473J3E'; // Your Alpha Vantage API key
var symbol = 'RELIANCE.NS'; // Use 'RELIANCE.BSE' for BSE
var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
}, (err, res, data) => {
    if (err) {
        console.log('Error:', err);
    } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
    } else {
        // Data is successfully parsed as a JSON object
        console.log('Stock Data:', data);
    }
});
