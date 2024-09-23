// Use your Alpha Vantage API key
const apiKey = 'TKCQJVCWL1473J3E'; 

// Symbols for BSE and NSE
const symbolBSE = 'RELIANCE.BSE';  // Reliance on BSE
const symbolNSE = 'RELIANCE.NS';   // Reliance on NSE

// Fetch stock data for BSE
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolBSE}&interval=1min&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const timeSeries = data['Time Series (1min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const stockPriceBSE = timeSeries[latestTime]['1. open'];
        document.getElementById('stock-price-bse').innerText = `Current Price: ₹${stockPriceBSE}`;
    })
    .catch(error => console.error('Error fetching BSE stock data:', error));

// Fetch stock data for NSE
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolNSE}&interval=1min&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const timeSeries = data['Time Series (1min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const stockPriceNSE = timeSeries[latestTime]['1. open'];
        document.getElementById('stock-price-nse').innerText = `Current Price: ₹${stockPriceNSE}`;
    })
    .catch(error => console.error('Error fetching NSE stock data:', error));
// Use your Alpha Vantage API key
const apiKey = 'TKCQJVCWL1473J3E'; 

// Symbols for BSE and NSE
const symbolBSE = 'RELIANCE.BSE';  // Reliance on BSE
const symbolNSE = 'RELIANCE.NS';   // Reliance on NSE

// Fetch stock data for BSE
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolBSE}&interval=1min&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const timeSeries = data['Time Series (1min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const stockPriceBSE = timeSeries[latestTime]['1. open'];
        document.getElementById('stock-price-bse').innerText = `Current Price: ₹${stockPriceBSE}`;
    })
    .catch(error => console.error('Error fetching BSE stock data:', error));

// Fetch stock data for NSE
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolNSE}&interval=1min&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const timeSeries = data['Time Series (1min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const stockPriceNSE = timeSeries[latestTime]['1. open'];
        document.getElementById('stock-price-nse').innerText = `Current Price: ₹${stockPriceNSE}`;
    })
    .catch(error => console.error('Error fetching NSE stock data:', error));
