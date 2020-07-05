import { injectable, inject } from 'inversify';
import StockService from '../../Stocks/StockService';
import { StockQuote } from '../../Stocks/StockProviders/types';
import { stringifyStockQuote } from '../../Stocks/stockUtils';
import { CommandModule, Arguments } from 'yargs';

interface QuoteArgs {
    stockSymbol: string;
}

@injectable()
class QuoteCommand {
    private _stockService: StockService;

    constructor(@inject(StockService) stockService: StockService) {
        this._stockService = stockService;
    }

    buildCommandObj(): CommandModule<unknown, QuoteArgs> {
        return {
            command: 'quote <stockSymbol>',
            describe: 'fetch latest quote for stock',
            handler: (args: Arguments<QuoteArgs>): void => {
                this._stockService.getQuote(args.stockSymbol as string).then(this.displayStockData());
            },
        };
    }

    private displayStockData(): (value: StockQuote) => void {
        return (sd) => {
            const stringifiedStock = stringifyStockQuote(sd);
            console.log(stringifiedStock);
        };
    }
}

export default QuoteCommand;
