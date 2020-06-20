import { StockData } from './types';

export interface StockProvider {
    fetchStockData(stockCode: string): Promise<StockData>;
}
