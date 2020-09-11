# TradingBot
This is a simple trading bot which generates live market data then use that same data in a simple sell strategy and finally show everything(profit &amp; loss) on screen. 

# About
* Frontend
  * This uses express http server to show index file.
  * Frontend is very simple, it shows the stocks that satisfies the given strategy allong with profit/loss.
  * I have use socket-IO between frontend and backend to display dynamic data on screen.
* Backend
  * First I use webScraping to get realtime NSE Nifty-50 stock data.
  * Then I apply my strategy which is very simple(select all the scrips which are between -1.75 and -1.5 and sell them) and then using socket-IO I append changes to screen. 
  * For webScraping I have used cheerio. 
  * .....going to add more strategy in future. 
  
# Installation
Install the dependencies
```sh
$ npm install
```
Start server
```sh
$ npm start
```
License
----
MIT

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/subhash00)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](https://twitter.com/@codingGuru5) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg' alt='Reddit' height='40'>](https://www.reddit.com/user/coding-Guru) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/channel/UCecHrGQQKOtWK9uOlxyUlWA)


