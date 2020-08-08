import { StockQuote } from './StockDataSource/Types';

export default interface IStockService {
    getQuote(stockCode: string): Promise<StockQuote>;
}
