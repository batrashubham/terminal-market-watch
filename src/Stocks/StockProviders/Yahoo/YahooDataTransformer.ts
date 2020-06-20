import StockDataTransformer from '../StockDataTransformer';
import { ProviderStockData, StockData } from '../types';
import { YahooQuoteResponse } from './types';

export default class YahooDataTransformer implements StockDataTransformer {
    transform(src: ProviderStockData): StockData {
        const yahooData = src as YahooQuoteResponse;
        return {
            ...yahooData.quoteResponse.result[0],
        };
    }
}
