import { YahooStockData } from './StockProviders/Yahoo/types';

export function stringifyStock(stock: YahooStockData): string {
    return `Name: ${stock.longName}\n
        Symbol: ${stock.symbol}\n
        Currency: ${stock.currency}\n
        Open: ${stock.regularMarketOpen}\n
        Price: ${stock.regularMarketPrice}\n
        Day High: ${stock.regularMarketDayHigh}\n
        Day Low: ${stock.regularMarketDayLow}\n
        Market: ${stock.market}\n`;
}
