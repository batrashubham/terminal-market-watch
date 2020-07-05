import { StockQuote } from './StockDataSource/types';

export function stringifyStockQuote(stockQuote: StockQuote): string {
    return `Name: ${stockQuote.longName}\n
        Symbol: ${stockQuote.symbol}\n
        Currency: ${stockQuote.currency}\n
        Open: ${stockQuote.regularMarketOpen}\n
        Price: ${stockQuote.regularMarketPrice}\n
        Day High: ${stockQuote.regularMarketDayHigh}\n
        Day Low: ${stockQuote.regularMarketDayLow}\n
        Market: ${stockQuote.market}\n`;
}
