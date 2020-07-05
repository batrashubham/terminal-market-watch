import axios, { AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import StockDataSource from '../StockDataSource';
import { YahooQuoteResponse } from './types';
import { StockQuote } from '../types';
import StockDataTransformer from '../StockDataTransformer';
import { Deps } from '../../../../DI/dependencies';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

@injectable()
export default class YahooStockDataSource implements StockDataSource {
    private _stockDataTransformer: StockDataTransformer;

    constructor(@inject(Deps.StockDataTransformer) stockDataTransformer: StockDataTransformer) {
        this._stockDataTransformer = stockDataTransformer;
    }

    public async getQuote(stockSymbol: string): Promise<StockQuote> {
        const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockSymbol));
        return this._stockDataTransformer.transform(result.data);
    }

    private buildQueryParams(stockSymbol: string): AxiosRequestConfig {
        return {
            params: {
                corsDomain: 'finance.yahoo.com',
                symbols: stockSymbol,
            },
        };
    }
}
