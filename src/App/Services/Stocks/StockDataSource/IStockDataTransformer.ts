import { SourceStockData, StockQuote } from './Types';

export default interface IStockDataTransformer {
    transform(src: SourceStockData): StockQuote;
}
