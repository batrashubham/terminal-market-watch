import { inject, injectable } from 'inversify';
import { AppTitle } from './Constants/constants';
import Options from './Commands/options';
import { StockQuote } from './Stocks/StockProviders/types';
import StockService from './Stocks/StockService';
import { getTextWrappedInBox } from './View/boxUtils';
import { getPrimaryColoredText } from './View/textUtils';
import { stringifyStockQuote } from './Stocks/stockUtils';

@injectable()
export default class App {
    constructor(@inject(StockService) private stocks: StockService) {}

    run(): void {
        const options = Options.getOptions();

        this.printAppTitle();
        this.stocks.getQuote(options.stock as string).then(this.displayStockData());
    }

    private displayStockData(): (value: StockQuote) => void {
        return (sd) => {
            const stringifiedStock = stringifyStockQuote(sd);
            console.log(getTextWrappedInBox(stringifiedStock));
        };
    }

    private printAppTitle(): void {
        const title = getPrimaryColoredText(AppTitle);
        console.log(getTextWrappedInBox(title));
    }
}
