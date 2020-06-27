import { inject, injectable } from 'inversify';
import { AppTitle } from './Constants/constants';
import Options from './Commands/options';
import { StockData } from './Stocks/StockProviders/types';
import Stocks from './Stocks/Stocks';
import { getTextWrappedInBox } from './View/boxUtils';
import { getPrimaryColoredText } from './View/textUtils';
import { stringifyStock } from './Stocks/stockUtils';

@injectable()
export default class App {
    constructor(@inject(Stocks) private stocks: Stocks) {}

    run(): void {
        const options = Options.getOptions();

        this.printAppTitle();
        this.stocks.fetchStockData(options.stock as string).then(this.displayStockData());
    }

    private displayStockData(): (value: StockData) => void {
        return (sd) => {
            const stringifiedStock = stringifyStock(sd);
            console.log(getTextWrappedInBox(stringifiedStock));
        };
    }

    private printAppTitle() {
        const title = getPrimaryColoredText(AppTitle);
        console.log(getTextWrappedInBox(title));
    }
}
