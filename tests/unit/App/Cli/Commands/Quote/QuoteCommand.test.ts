import 'reflect-metadata';
import QuoteCommand from '../../../../../../src/App/Cli/Commands/Quote/QuoteCommand';
import StockService from '../../../../../../src/App/Services/Stocks/StockService';
import { QuoteArgs } from '../../../../../../src/App/Cli/Commands/Quote/Types';
import { Arguments } from 'yargs';
import { StockQuote } from '../../../../../../src/App/Services/Stocks/StockDataSource/types';

describe('QuoteCommand', () => {
    console.log = jest.fn();
    const stockService: StockService = {
        getQuote: jest.fn((stockCode) => Promise.resolve({ symbol: stockCode } as StockQuote)),
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
