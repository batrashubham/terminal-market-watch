import { injectable, inject } from 'inversify';
import { StockQuote } from '../../../Services/Stocks/StockDataSource/types';
import { stringifyStockQuote } from '../../../Services/Stocks/stockUtils';
import { CommandModule, Arguments } from 'yargs';
import { Deps } from '../../../DI/dependencies';
import StockService from '../../../Services/Stocks/StockService';
import { QuoteArgs } from './Types';

@injectable()
export default class QuoteCommand {
    private _stockService: StockService;

    constructor(@inject(Deps.StockService) stockService: StockService) {
        this._stockService = stockService;
    }

    buildCommandObj(): CommandModule<unknown, QuoteArgs> {
        return {
            command: 'quote <stockSymbol>',
            describe: 'fetch latest quote for stock',
            handler: (args: Arguments<QuoteArgs>): void => {
                this._stockService
                    .getQuote(args.stockSymbol as string)
                    .then(this.displayStockData())
                    .catch((err) => {
                        console.log(err);
                    });
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
