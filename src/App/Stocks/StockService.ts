import { StockQuote } from './StockProviders/types';
import { inject, injectable } from 'inversify';
import StockDataProvider from './StockProviders/StockDataProvider';
import { Deps } from '../DI/dependencies';

@injectable()
export default class StockService {
    constructor(@inject(Deps.StockDataProvider) private stockDataProvider: StockDataProvider) {}

    async getQuote(stockCode: string): Promise<StockQuote> {
        return this.stockDataProvider.getQuote(stockCode);
    }
}
