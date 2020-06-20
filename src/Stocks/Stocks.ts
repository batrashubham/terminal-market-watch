import { YahooQuoteResponse } from './StockProviders/Yahoo/types';
import YahooStockProvider from '../Stocks/StockProviders/Yahoo/yahooStockProvider';

export async function fetchStockData(stockCode: string): Promise<YahooQuoteResponse> {
    return new YahooStockProvider().fetchStockData(stockCode);
}
