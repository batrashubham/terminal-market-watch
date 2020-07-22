import 'reflect-metadata';
import StockServiceImpl from '../../../../../src/App/Services/Stocks/StockServiceImpl';
import StockDataSource from '../../../../../src/App/Services/Stocks/StockDataSource/StockDataSource';
import StockService from '../../../../../src/App/Services/Stocks/StockService';

const stockCode = 'ABC';

let stockService: StockService;
let mockStockDataSource: StockDataSource;

describe('StockService', () => {
    beforeEach(() => {
        mockStockDataSource = {
            getQuote: jest.fn(),
        };
        stockService = new StockServiceImpl(mockStockDataSource);
    });
    describe('getQuote', () => {
        it('should call getStockQuote of StockDataSource', () => {
            stockService.getQuote(stockCode);
            expect(mockStockDataSource.getQuote).toHaveBeenCalledWith(stockCode);
        });
    });
});
