import 'reflect-metadata';
import StockServiceImpl from '../../../src/App/Services/Stocks/StockServiceImpl';
import StockDataSource from '../../../src/App/Services/Stocks/StockDataSource/StockDataSource';
import StockService from '../../../src/App/Services/Stocks/StockService';

const stockCode = 'ABC';

let stockService: StockService;
let mockStockDataProvider: StockDataSource;

describe('StockService', () => {
    beforeEach(() => {
        mockStockDataProvider = {
            getQuote: jest.fn(),
        };
        stockService = new StockServiceImpl(mockStockDataProvider);
    });
    describe('getQuote', () => {
        it('should call getStockQuote of StockDataProvider', () => {
            stockService.getQuote(stockCode);
            expect(mockStockDataProvider.getQuote).toHaveBeenCalledWith(stockCode);
        });
    });
});
