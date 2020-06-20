import axios from 'axios';
import { QuoteResponse } from './types';

const YahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

export async function fetchStockData(stockCode: string): Promise<QuoteResponse> {
    const result = await axios.get<QuoteResponse>(YahooFinanceUrl, {
        params: {
            lang: 'en_IN',
            region: 'IN',
            corsDomain: 'finance.yahoo.com',
            symbols: stockCode,
        },
    });
    return result.data;
}
