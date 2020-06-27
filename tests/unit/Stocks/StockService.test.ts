import 'reflect-metadata';
import StockService from '../../../src/App/Stocks/StockService';
import StockDataProvider from '../../../src/App/Stocks/StockProviders/StockDataProvider';

const stockCode = 'ABC';

let stockService: StockService;
let mockStockDataProvider: StockDataProvider;

describe('StockService', () => {
    beforeEach(() => {
        mockStockDataProvider = {
            getQuote: jest.fn(),
        };
        stockService = new StockService(mockStockDataProvider);
    });
    describe('getQuote', () => {
        it('should call getStockQuote of StockDataProvider', () => {
            stockService.getQuote(stockCode);
            expect(mockStockDataProvider.getQuote).toHaveBeenCalledWith(stockCode);
        });
    });
});
