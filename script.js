const fetchStockData = async (symbol) => {
    const apiKey = 'TKCQJVCWL1473J3E'; // Your Alpha Vantage API key
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

const displayStockData = async () => {
    const bseSymbol = 'RELIANCE.BSE'; // Use actual BSE symbol
    const nseSymbol = 'RELIANCE.NS'; // Use actual NSE symbol

    try {
        const bseData = await fetchStockData(bseSymbol);
        const nseData = await fetchStockData(nseSymbol);

        document.getElementById('stock-data-bse').innerText = JSON.stringify(bseData, null, 2); // Display BSE data
        document.getElementById('stock-data-nse').innerText = JSON.stringify(nseData, null, 2); // Display NSE data
    } catch (error) {
        console.error('Error fetching stock data:', error);
        document.getElementById('stock-data-bse').innerText = 'Error loading BSE data.';
        document.getElementById('stock-data-nse').innerText = 'Error loading NSE data.';
    }
};

displayStockData();
