import 'reflect-metadata';
import QuoteCommand from '../../../../../../src/App/Cli/Commands/Quote/QuoteCommand';
import IStockService from '../../../../../../src/App/Services/Stocks/IStockService';
import { QuoteArgs } from '../../../../../../src/App/Cli/Commands/Quote/Types';
import { Arguments } from 'yargs';
import { StockQuote } from '../../../../../../src/App/Services/Stocks/StockDataSource/Types';

describe('QuoteCommand', () => {
    console.log = jest.fn();
    const stockService: IStockService = {
        getQuote: jest.fn((stockCode) => Promise.resolve({ symbol: stockCode } as StockQuote)),
        validateStockSymbols: jest.fn(),
    };
    const args: Arguments<QuoteArgs> = {
        stockSymbol: 'AAPL',
        _: [''],
        $0: '',
    };
    it('should call getQuote of stock service', () => {
        const cmd = new QuoteCommand(stockService);
        cmd.buildCommandObj().handler(args);
        expect(stockService.getQuote).toHaveBeenCalledWith(args.stockSymbol);
    });
});
