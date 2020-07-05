import 'reflect-metadata';
import StockDataTransformer from '../StockDataTransformer';
import { ProviderStockData, StockQuote } from '../types';
import { YahooQuoteResponse } from './types';
import { injectable } from 'inversify';

@injectable()
export default class YahooDataTransformer implements StockDataTransformer {
    transform(src: ProviderStockData): Promise<StockQuote> {
        const yahooData = src as YahooQuoteResponse;
        return Promise.resolve({
            ...yahooData.quoteResponse?.result[0],
        });
    }
}
