const refreshInterval = 5000; // 5 seconds

function fetchCryptoData() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
        .then(res => res.json())
        .then(data => {
            const coins = Object.keys(data);

            coins.forEach(coin => {
                const coinInfo = data[coin];
                const price = coinInfo.usd.toFixed(2);
                const change = coinInfo.usd_24h_change.toFixed(2);

                document.getElementById(`${coin}-price`).innerText = `$${price}`;
                document.getElementById(`${coin}-change`).innerText = `${change}%`;

                const coinDiv = document.getElementById(coin);
                coinDiv.classList.remove('rising', 'falling');
                coinDiv.classList.add(change < 0 ? 'falling' : 'rising');
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchCryptoData();
setInterval(fetchCryptoData, refreshInterval);
