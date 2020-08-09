import { StockQuote } from './StockDataSource/Types';

export default interface IStockService {
    getQuote(stockCode: string): Promise<StockQuote>;
    validateStockSymbols(stocks: string): Promise<Array<string>>;
}
