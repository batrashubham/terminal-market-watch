import { StockQuote } from '../../../../../../../src/App/Services/Stocks/StockDataSource/Types';
import YahooDataTransformer from '../../../../../../../src/App/Services/Stocks/StockDataSource/Yahoo/YahooDataTransformer';
import { YahooQuoteResponse } from '../../../../../../../src/App/Services/Stocks/StockDataSource/Yahoo/Types';

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

const expected: StockQuote = {
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

describe('YahooDataTransformer', () => {
    describe('transform', () => {
        it('should transform yahoo stock data to tmw stock quote', async () => {
            const yahooTransformer = new YahooDataTransformer();
            const transformedData = await yahooTransformer.transform(yahooData);
            expect(transformedData).toStrictEqual(expected);
        });
    });
});
