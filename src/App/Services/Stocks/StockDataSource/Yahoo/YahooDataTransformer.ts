import 'reflect-metadata';
import IStockDataTransformer from '../IStockDataTransformer';
import { SourceStockData, StockQuote } from '../types';
import { YahooQuoteResponse } from './types';
import { injectable } from 'inversify';

@injectable()
export default class YahooDataTransformer implements IStockDataTransformer {
    transform(src: SourceStockData): StockQuote {
        const yahooData = src as YahooQuoteResponse;
        return {
            ...yahooData.quoteResponse?.result[0],
        };
    }
}
