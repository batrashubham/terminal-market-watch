import { StockQuote } from './StockDataSource/types';
import { inject, injectable } from 'inversify';
import StockDataSource from './StockDataSource/StockDataSource';
import { Deps } from '../../DI/dependencies';
import StockService from './StockService';

@injectable()
export default class StockServiceImpl implements StockService {
    private _stockDataSource: StockDataSource;

    constructor(@inject(Deps.StockDataSource) stockDataProvider: StockDataSource) {
        this._stockDataSource = stockDataProvider;
    }

    async getQuote(stockCode: string): Promise<StockQuote> {
        return this._stockDataSource.getQuote(stockCode);
    }
}
