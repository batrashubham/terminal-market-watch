import { YahooStockData } from './StockProviders/Yahoo/types';
import { StockData } from './StockProviders/types';

export function stringifyStock(stock: StockData): string {
    return `Name: ${stock.longName}\n
        Symbol: ${stock.symbol}\n
        Currency: ${stock.currency}\n
        Open: ${stock.regularMarketOpen}\n
        Price: ${stock.regularMarketPrice}\n
        Day High: ${stock.regularMarketDayHigh}\n
        Day Low: ${stock.regularMarketDayLow}\n
        Market: ${stock.market}\n`;
}
