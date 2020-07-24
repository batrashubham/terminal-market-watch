import { StockQuote } from './StockDataSource/types';

export default interface IStockService {
    getQuote(stockCode: string): Promise<StockQuote>;
}
