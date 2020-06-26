import 'reflect-metadata';
import axios from 'axios';
import YahooStockDataProvider, {
    YahooFinanceUrl,
} from '../../../../../src/Stocks/StockProviders/Yahoo/YahooStockDataProvider';

jest.mock('axios');
jest.mock('../../../../../src/Stocks/StockProviders/StockDataTransformer');
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

describe('YahooStockProvider ', () => {
    it('should call yahoo finance api', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));
        await new YahooStockDataProvider(mockTransformer).fetchStockData(stockCode);
        expect(mockedAxios.get).toHaveBeenCalledWith(YahooFinanceUrl, {
            params: {
                corsDomain: 'finance.yahoo.com',
                symbols: stockCode,
            },
        });
    });
});
