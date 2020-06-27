import { StockData, ProviderStockData } from './types';

export default interface StockDataTransformer {
    transform(src: ProviderStockData): Promise<StockData>;
}
