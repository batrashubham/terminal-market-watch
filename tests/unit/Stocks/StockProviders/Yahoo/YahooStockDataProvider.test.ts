import 'reflect-metadata';
import YahooStockDataProvider, {
    YahooFinanceUrl,
} from '../../../../../src/App/Stocks/StockProviders/Yahoo/YahooStockDataProvider';
import axios from 'axios';

jest.mock('axios');
jest.mock('../../../../../src/App/Stocks/StockProviders/StockDataTransformer');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTransformer = {
    transform: jest.fn(),
};

const stockCode = 'AAPL';

const result = {
    data: {
        quoteResponse: {
            result: [
                {
                    symbol: 'ABC',
                },
            ],
        },
    },
};

describe('YahooStockDataProvider ', () => {
    describe('getStockQuote', () => {
        beforeEach(() => {
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));
        });
        it('should call yahoo finance api', async () => {
            await new YahooStockDataProvider(mockTransformer).getQuote(stockCode);
            expect(mockedAxios.get).toHaveBeenCalledWith(YahooFinanceUrl, {
                params: {
                    corsDomain: 'finance.yahoo.com',
                    symbols: stockCode,
                },
            });
        });

        it('should call data transform function', async () => {
            await new YahooStockDataProvider(mockTransformer).getQuote(stockCode);
            expect(mockTransformer.transform).toBeCalledWith(result.data);
        });
    });
});
