import { StockQuote } from './types';

export default interface StockDataSource {
    getQuote(stockSymbol: string): Promise<StockQuote>;
}
