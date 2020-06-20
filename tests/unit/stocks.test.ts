import { fetchStockData } from '../../src/Stocks/stocks';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const result = {
    data: {
        quoteResponse: null,
    },
};

describe('stocks', () => {
    it('should return stocks data', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(result));
        const stocks = await fetchStockData('AAPL');
        expect(stocks.quoteResponse).toBeNull();
    });
});
