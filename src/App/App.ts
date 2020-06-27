import Options from './Commands/options';
import { getPrimaryColoredText } from './View/textUtils';
import { getTextWrappedInBox } from './View/boxUtils';
import Stocks from './Stocks/Stocks';
import { AppTitle } from './Constants/constants';
import { stringifyStock } from './Stocks/stockUtils';
import { StockData } from './Stocks/StockProviders/types';
import { injectable, inject } from 'inversify';

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
