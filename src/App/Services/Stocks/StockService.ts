import { StockQuote } from './StockDataSource/types';

export default interface StockService {
    getQuote(stockCode: string): Promise<StockQuote>;
}
