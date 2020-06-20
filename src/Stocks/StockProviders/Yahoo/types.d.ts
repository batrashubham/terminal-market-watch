import { ProviderStockData } from '../types';

export interface YahooStockData {
    currency: string;
    shortName: string;
    longName: string;
    market: string;
    fullExchangeName: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketOpen: number;
    marketCap: number;
    exchangeDataDelayedBy: number;
    fiftyTwoWeekRange: string;
    sharesOutstanding: number;
    fiftyDayAverage: number;
    symbol: string;
}

export interface YahooResult {
    result: Array<YahooStockData>;
}

export interface YahooQuoteResponse extends ProviderStockData {
    quoteResponse: YahooResult;
}
