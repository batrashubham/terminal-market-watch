import 'reflect-metadata';
import YahooStockDataSource, {
    YahooFinanceUrl,
} from '../../../../../../../src/App/Services/Stocks/StockDataSource/Yahoo/YahooStockDataSource';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTransformer = {
    transform: jest.fn(),
};

const stockSymbol = 'AAPL';

const result = {
    data: {
        quoteResponse: {
            result: [
                {
                    symbol: stockSymbol,
                },
            ],
        },
    },
};

describe('YahooStockDataSource ', () => {
    describe('getStockQuote', () => {
        beforeEach(() => {
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));
        });
        it('should call yahoo finance api', async () => {
            await new YahooStockDataSource(mockTransformer).getQuote(stockSymbol);
            expect(mockedAxios.get).toHaveBeenCalledWith(YahooFinanceUrl, {
                params: {
                    corsDomain: 'finance.yahoo.com',
                    symbols: stockSymbol,
                },
            });
        });

        it('should call data transform function', async () => {
            await new YahooStockDataSource(mockTransformer).getQuote(stockSymbol);
            expect(mockTransformer.transform).toHaveBeenCalledWith(result.data);
        });
    });
});
