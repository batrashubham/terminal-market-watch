import axios, { AxiosRequestConfig } from 'axios';
import { StockProvider } from '../stockProvider';
import { YahooQuoteResponse } from './types';
import { StockData } from '../types';

export const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

class YahooStockProvider implements StockProvider {
    public async fetchStockData(stockCode: string): Promise<StockData> {
        const result = await axios.get<YahooQuoteResponse>(YahooFinanceUrl, this.buildQueryParams(stockCode));
        const res: StockData = {
            ...result.data.quoteResponse.result[0],
        };
        return res;
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
