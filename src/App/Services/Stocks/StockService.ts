import { StockQuote } from './StockDataSource/Types';
import { inject, injectable } from 'inversify';
import IStockDataSource from './StockDataSource/IStockDataSource';
import { Deps } from '../../DI/dependencies';
import IStockService from './IStockService';

@injectable()
export default class StockService implements IStockService {
    private _stockDataSource: IStockDataSource;

    constructor(@inject(Deps.StockDataSource) stockDataSource: IStockDataSource) {
        this._stockDataSource = stockDataSource;
    }

    validateStockSymbols(stocks: string): Promise<string[]> {
        return this._stockDataSource.validateStockSymbols(stocks);
    }

    async getQuote(stockCode: string): Promise<StockQuote> {
        return this._stockDataSource.getQuote(stockCode);
    }
}
