import { injectable, inject } from 'inversify';
import { StockQuote } from '../../../Services/Stocks/StockDataSource/Types';
import { stringifyStockQuote } from '../../../Services/Stocks/stockUtils';
import { CommandModule, Arguments } from 'yargs';
import { Deps } from '../../../DI/dependencies';
import IStockService from '../../../Services/Stocks/IStockService';
import { QuoteArgs } from './Types';
import ICommand from '../ICommand';

@injectable()
export default class QuoteCommand implements ICommand<unknown, QuoteArgs> {
    private _stockService: IStockService;

    constructor(@inject(Deps.StockService) stockService: IStockService) {
        this._stockService = stockService;
    }

    buildCommandObj(): CommandModule<unknown, QuoteArgs> {
        return {
            command: 'quote <stockSymbol>',
            describe: 'fetch latest quote for stock',
            handler: this.createQuoteCommandHandler(),
        };
    }

    private createQuoteCommandHandler(): (args: Arguments<QuoteArgs>) => void {
        return (args: Arguments<QuoteArgs>): void => {
            this._stockService
                .getQuote(args.stockSymbol as string)
                .then(this.displayStockData())
                .catch((err) => {
                    console.log(err);
                });
        };
    }

    private displayStockData(): (value: StockQuote) => void {
        return (sd) => {
            const stringifiedStock = stringifyStockQuote(sd);
            console.log(stringifiedStock);
        };
    }
}
