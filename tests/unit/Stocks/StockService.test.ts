import 'reflect-metadata';
import StockService from '../../../src/App/Services/Stocks/StockService';
import StockDataSource from '../../../src/App/Services/Stocks/StockDataSource/StockDataSource';

const stockCode = 'ABC';

let stockService: StockService;
let mockStockDataProvider: StockDataSource;

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
