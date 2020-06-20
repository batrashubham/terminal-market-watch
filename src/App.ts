import Options from './options';
import { getPrimaryColoredText } from './View/textUtils';
import { getTextWrappedInBox } from './View/boxUtils';
import { fetchStockData } from './Stocks/stocks';
import { AppTitle } from './Constants/constants';
import { stringifyStock } from './Stocks/stockUtils';
import { StockData } from './Stocks/StockProviders/types';

class App {
    run() {
        const options = Options.getOptions();

        this.printAppTitle();
        fetchStockData(options.stock as string).then(this.displayStockData());
    }

    private displayStockData(): ((value: StockData) => void | PromiseLike<void>) | null | undefined {
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

new App().run();
