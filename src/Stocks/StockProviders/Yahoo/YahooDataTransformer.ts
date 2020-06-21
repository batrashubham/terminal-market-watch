import StockDataTransformer from '../StockDataTransformer';
import { ProviderStockData, StockData } from '../types';
import { YahooQuoteResponse } from './types';

export default class YahooDataTransformer implements StockDataTransformer {
    transform(src: ProviderStockData): Promise<StockData> {
        const yahooData = src as YahooQuoteResponse;
        return Promise.resolve({
            ...yahooData.quoteResponse?.result[0],
        });
    }
}
