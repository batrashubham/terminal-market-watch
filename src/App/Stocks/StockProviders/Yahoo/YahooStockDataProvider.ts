import axios, { AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import StockDataProvider from '../StockDataProvider';
import { YahooQuoteResponse } from './types';
import { StockQuote } from '../types';
import StockDataTransformer from '../StockDataTransformer';
import { Deps } from '../../../DI/dependencies';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

@injectable()
export default class YahooStockDataProvider implements StockDataProvider {
    private _stockDataTransformer: StockDataTransformer;

    constructor(@inject(Deps.StockDataTransformer) stockDataTransformer: StockDataTransformer) {
        this._stockDataTransformer = stockDataTransformer;
    }

    public async getQuote(stockCode: string): Promise<StockQuote> {
        const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockCode));
        return this._stockDataTransformer.transform(result.data);
    }

    private buildQueryParams(stockCode: string): AxiosRequestConfig {
        return {
            params: {
                corsDomain: 'finance.yahoo.com',
                symbols: stockCode,
            },
        };
    }
}
