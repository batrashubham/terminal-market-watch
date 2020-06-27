import { StockQuote } from './StockProviders/types';
import { inject, injectable } from 'inversify';
import StockDataProvider from './StockProviders/StockDataProvider';
import { Deps } from '../DI/dependencies';

@injectable()
export default class StockService {
    private _stockDataProvider: StockDataProvider;

    constructor(@inject(Deps.StockDataProvider) stockDataProvider: StockDataProvider) {
        this._stockDataProvider = stockDataProvider;
    }

    async getQuote(stockCode: string): Promise<StockQuote> {
        return this._stockDataProvider.getQuote(stockCode);
    }
}
