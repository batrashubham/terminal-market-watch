import { ProviderStockData, StockQuote } from './types';

export default interface StockDataTransformer {
    transform(src: ProviderStockData): Promise<StockQuote>;
}
