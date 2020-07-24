import { StockQuote } from './types';

export default interface IStockDataSource {
    getQuote(stockSymbol: string): Promise<StockQuote>;
}
