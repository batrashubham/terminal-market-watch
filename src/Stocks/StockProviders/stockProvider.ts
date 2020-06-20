import { StockData } from './types';

export default interface StockProvider {
    fetchStockData(stockCode: string): Promise<StockData>;
}
