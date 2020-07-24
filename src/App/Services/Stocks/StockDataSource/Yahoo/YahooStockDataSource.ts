import axios, { AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import IStockDataSource from '../IStockDataSource';
import { YahooQuoteResponse } from './types';
import { StockQuote } from '../types';
import IStockDataTransformer from '../IStockDataTransformer';
import { Deps } from '../../../../DI/dependencies';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

@injectable()
export default class YahooStockDataSource implements IStockDataSource {
    private _stockDataTransformer: IStockDataTransformer;

    constructor(@inject(Deps.StockDataTransformer) stockDataTransformer: IStockDataTransformer) {
        this._stockDataTransformer = stockDataTransformer;
    }

    public async getQuote(stockSymbol: string): Promise<StockQuote> {
        try {
            const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockSymbol));
            if (result.data.quoteResponse.result.length == 0) {
                return Promise.reject({
                    message: 'No data found for ' + stockSymbol,
                });
            }
            return Promise.resolve(this._stockDataTransformer.transform(result.data));
        } catch (err) {
            return Promise.reject({ message: 'An error occured while fetching data for ' + stockSymbol, error: err });
        }
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
