import { StockQuote } from './types';

export default interface StockDataProvider {
    getQuote(stockCode: string): Promise<StockQuote>;
}
