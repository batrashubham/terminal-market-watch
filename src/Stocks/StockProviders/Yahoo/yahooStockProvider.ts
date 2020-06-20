import axios, { AxiosRequestConfig } from 'axios';
import StockProvider from '../StockProvider';
import { YahooQuoteResponse } from './types';
import { StockData } from '../types';
import YahooDataTransformer from './YahooDataTransformer';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

class YahooStockProvider implements StockProvider {
    public async fetchStockData(stockCode: string): Promise<StockData> {
        const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockCode));
        const yahooTransformer = new YahooDataTransformer();
        return yahooTransformer.transform(result.data);
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
export default YahooStockProvider;
