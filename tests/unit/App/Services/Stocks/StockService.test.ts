import 'reflect-metadata';
import StockService from '../../../../../src/App/Services/Stocks/StockService';
import IStockDataSource from '../../../../../src/App/Services/Stocks/StockDataSource/IStockDataSource';
import IStockService from '../../../../../src/App/Services/Stocks/IStockService';

const stockCode = 'ABC';

let stockService: IStockService;
let mockStockDataSource: IStockDataSource;

describe('StockService', () => {
    beforeEach(() => {
        mockStockDataSource = {
            getQuote: jest.fn(),
        };
        stockService = new StockService(mockStockDataSource);
    });
    describe('getQuote', () => {
        it('should call getStockQuote of StockDataSource', () => {
            stockService.getQuote(stockCode);
            expect(mockStockDataSource.getQuote).toHaveBeenCalledWith(stockCode);
        });
    });
});
