import { YahooQuoteResponse } from '../../../../src/Stocks/StockProviders/Yahoo/types';
import { StockData } from '../../../../src/Stocks/StockProviders//types';
import YahooDataTransformer from '../../../../src/Stocks/StockProviders/Yahoo/YahooDataTransformer';

describe('YahooDataTransformer', () => {
    const yahooData: YahooQuoteResponse = {
        quoteResponse: {
            result: [
                {
                    currency: 'inr',
                    longName: 'long name',
                    shortName: 'short name',
                    exchangeDataDelayedBy: 10,
                    fiftyDayAverage: 12,
                    fiftyTwoWeekRange: '12-26',
                    fullExchangeName: 'fxn',
                    market: 'in_market',
                    marketCap: 1222131,
                    regularMarketDayHigh: 1,
                    regularMarketDayLow: 12,
                    regularMarketOpen: 45,
                    regularMarketPrice: 123,
                    sharesOutstanding: 2,
                    symbol: 'APAP',
                },
            ],
        },
    };

    const expected: StockData = {
        currency: 'inr',
        longName: 'long name',
        shortName: 'short name',
        exchangeDataDelayedBy: 10,
        fiftyDayAverage: 12,
        fiftyTwoWeekRange: '12-26',
        fullExchangeName: 'fxn',
        market: 'in_market',
        marketCap: 1222131,
        regularMarketDayHigh: 1,
        regularMarketDayLow: 12,
        regularMarketOpen: 45,
        regularMarketPrice: 123,
        sharesOutstanding: 2,
        symbol: 'APAP',
    };
    it('should transform yahoo stock data to tmw stock data', () => {
        const yahooTransformer = new YahooDataTransformer();
        const transformedData = yahooTransformer.transform(yahooData);
        expect(transformedData).toStrictEqual(expected);
    });
});
