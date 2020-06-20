import YahooStockProvider from '../Stocks/StockProviders/Yahoo/YahooStockProvider';
import { StockData } from './StockProviders/types';

export async function fetchStockData(stockCode: string): Promise<StockData> {
    return new YahooStockProvider().fetchStockData(stockCode);
}
