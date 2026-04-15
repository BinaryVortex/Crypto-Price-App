# Crypto Price App

A simple web application that displays real-time cryptocurrency prices for popular coins like Bitcoin, Ethereum, and more. Built with pure HTML, CSS, and JavaScript, this app fetches live data from the CoinGecko API and updates every 5 seconds.

![Screenshot](Screenshot%202024-09-02%20104528.png)

## Features

- **Real-time Prices**: Displays current USD prices for 6 major cryptocurrencies.
- **24-Hour Change**: Shows percentage change in price over the last 24 hours.
- **Visual Indicators**: Colors the price cards green for rising prices and red for falling prices.
- **Auto-Refresh**: Automatically updates data every 5 seconds.
- **Responsive Design**: Works on desktop and mobile devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- CoinGecko API

## Cryptocurrencies Supported

- Bitcoin (BTC)
- Tether (USDT)
- Ethereum (ETH)
- Litecoin (LTC)
- Cardano (ADA)
- Dogecoin (DOGE)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/BinaryVortex/Crypto-Price-App.git
   ```

2. Navigate to the project directory:
   ```
   cd Crypto-Price-App
   ```

3. Open `index.html` in your web browser.

That's it! No additional dependencies or build steps required.

## Usage

Simply open the `index.html` file in any modern web browser. The app will automatically start fetching and displaying cryptocurrency prices. The prices update every 5 seconds.

## API

This app uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch cryptocurrency data. The API endpoint used is:

```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,tether,ethereum,litecoin,cardano,dogecoin&vs_currencies=usd&include_24hr_change=true
```

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or additional features.

## License

This project is open source and available under the [MIT License](LICENSE).

## Live Demo

View the live demo: [https://binaryvortex.github.io/Crypto-Price-App/](https://binaryvortex.github.io/Crypto-Price-App/)