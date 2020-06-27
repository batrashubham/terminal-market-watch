import { ProviderStockData, StockData } from './types';

export default interface StockDataTransformer {
    transform(src: ProviderStockData): Promise<StockData>;
}
