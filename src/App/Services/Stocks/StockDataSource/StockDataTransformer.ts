import { SourceStockData, StockQuote } from './types';

export default interface StockDataTransformer {
    transform(src: SourceStockData): StockQuote;
}
