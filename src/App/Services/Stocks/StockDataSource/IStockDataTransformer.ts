import { SourceStockData, StockQuote } from './types';

export default interface IStockDataTransformer {
    transform(src: SourceStockData): StockQuote;
}
