import { StockQuote } from './Types';

export default interface IStockDataSource {
    getQuote(stockSymbol: string): Promise<StockQuote>;
    validateStockSymbols(stocks: string): Promise<Array<string>>;
}
