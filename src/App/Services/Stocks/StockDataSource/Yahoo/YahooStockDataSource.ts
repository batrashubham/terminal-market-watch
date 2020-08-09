import axios, { AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import IStockDataSource from '../IStockDataSource';
import { YahooQuoteResponse, YahooSymbolSearchResult } from './Types';
import { StockQuote } from '../Types';
import IStockDataTransformer from '../IStockDataTransformer';
import { Deps } from '../../../../DI/dependencies';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';
export const YahooFinanceSymbolSearchUrl = 'https://query2.finance.yahoo.com/v1/finance/search';

@injectable()
export default class YahooStockDataSource implements IStockDataSource {
    private _stockDataTransformer: IStockDataTransformer;

    constructor(@inject(Deps.StockDataTransformer) stockDataTransformer: IStockDataTransformer) {
        this._stockDataTransformer = stockDataTransformer;
    }

    public async validateStockSymbols(stocks: string): Promise<string[]> {
        try {
            const result = await axios.get<YahooSymbolSearchResult>(
                YahooFinanceSymbolSearchUrl,
                this.buildValidateStockSymbolsQueryParams(stocks),
            );
            const stocksArr = stocks.split(',');
            let difference = stocksArr;
            if (result.data.nav && result.data.nav.length > 0 && result.data.nav[0].symbols) {
                difference = stocksArr.filter((x) => !result.data.nav[0].symbols.includes(x));
            }
            return Promise.resolve(difference);
        } catch (err) {
            return Promise.reject({ message: 'An error occured while fetching data for ' + stocks, error: err });
        }
    }

    public async getQuote(stockSymbol: string): Promise<StockQuote> {
        try {
            const result = await axios.get<YahooQuoteResponse>(
                YahooFinanceUrl,
                this.buildGetStockQuoteQueryParams(stockSymbol),
            );
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

    private buildGetStockQuoteQueryParams(stockSymbol: string): AxiosRequestConfig {
        return {
            params: {
                corsDomain: 'finance.yahoo.com',
                symbols: stockSymbol,
            },
        };
    }

    private buildValidateStockSymbolsQueryParams(stockSymbols: string): AxiosRequestConfig {
        return {
            params: {
                corsDomain: 'finance.yahoo.com',
                q: stockSymbols,
                newsCount: 0,
            },
        };
    }
}
