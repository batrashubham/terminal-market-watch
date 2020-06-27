import YahooStockDataProvider from './StockProviders/Yahoo/YahooStockDataProvider';
import { StockData } from './StockProviders/types';
import { inject, injectable } from 'inversify';
import StockDataProvider from './StockProviders/StockDataProvider';
import { TYPES } from '../DI/types';

@injectable()
export default class Stocks {
    constructor(@inject(TYPES.StockDataProvider) private stockDataProvider: StockDataProvider) {}

    async fetchStockData(stockCode: string): Promise<StockData> {
        return this.stockDataProvider.fetchStockData(stockCode);
    }
}
