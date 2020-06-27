import axios, { AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import StockDataProvider from '../StockDataProvider';
import { YahooQuoteResponse } from './types';
import { StockData } from '../types';
import StockDataTransformer from '../StockDataTransformer';
import { TYPES } from '../../../DI/types';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

@injectable()
class YahooStockDataProvider implements StockDataProvider {
    constructor(@inject(TYPES.StockDataTransformer) private stockDataTransformer: StockDataTransformer) {}

    public async fetchStockData(stockCode: string): Promise<StockData> {
        const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockCode));
        return this.stockDataTransformer.transform(result.data);
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
export default YahooStockDataProvider;
