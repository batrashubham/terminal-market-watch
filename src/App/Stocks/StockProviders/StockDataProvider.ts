import { StockData } from './types';

export default interface StockDataProvider {
    fetchStockData(stockCode: string): Promise<StockData>;
}
