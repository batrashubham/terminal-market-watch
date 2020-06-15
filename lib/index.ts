#!/usr/bin/env node
import Options from './Options'
import { Title } from "./AppTitle";
import Stocks from './Stocks';
import boxen, { BorderStyle } from 'boxen';

const options = Options.getOptions();

console.log(Title);

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: BorderStyle.Round,
    borderColor: 'green',
    backgroundColor: "#555555",
    float: 'center'
};

Stocks.getStockData(options.stock as string)
.then(sd => {
    var res = sd.quoteResponse.result[0];
    var stockData = `\nName: ${res.longName}\n
    Symbol: ${res.symbol}\n
    Currency: ${res.currency}\n
    Open: ${res.regularMarketOpen}\n
    Price: ${res.regularMarketPrice}\n
    Day High: ${res.regularMarketDayHigh}\n
    Day Low: ${res.regularMarketDayLow}\n
    Market: ${res.market}\n`; 
    // @ts-ignore
    var stockDataBox = boxen( stockData, boxenOptions )
    console.log(stockDataBox);
});
