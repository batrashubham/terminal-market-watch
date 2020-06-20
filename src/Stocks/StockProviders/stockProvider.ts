import { YahooQuoteResponse } from './Yahoo/types';

export interface StockProvider {
    fetchStockData(stockCode: string): Promise<YahooQuoteResponse>;
}
