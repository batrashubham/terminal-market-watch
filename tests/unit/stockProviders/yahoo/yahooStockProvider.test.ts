import YahooStockProvider, { YahooFinanceUrl } from '../../../../src/Stocks/StockProviders/Yahoo/yahooStockProvider';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const stockCode = 'AAPL';

const result = {
    data: {
        quoteResponse: {
            result: [{}],
        },
    },
};

describe('stocks', () => {
    it('should return stocks data', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));
        await new YahooStockProvider().fetchStockData(stockCode);
        expect(mockedAxios.get).toHaveBeenCalledWith(YahooFinanceUrl, {
            params: {
                corsDomain: 'finance.yahoo.com',
                symbols: stockCode,
            },
        });
    });
});
