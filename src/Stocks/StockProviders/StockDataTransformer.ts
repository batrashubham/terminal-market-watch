import { StockData, ProviderStockData } from './types';

export default interface StockDataTransformer {
    transform(src: ProviderStockData): StockData;
}
