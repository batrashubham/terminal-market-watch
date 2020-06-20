import Options from './options';
import { getPrimaryColoredText } from './View/textUtils';
import { getTextWrappedInBox } from './View/boxUtils';
import { fetchStockData } from './Stocks/stocks';
import { AppTitle } from './Constants/constants';
import { YahooQuoteResponse } from './Stocks/StockProviders/Yahoo/types';
import { stringifyStock } from './Stocks/stockUtils';

class App {
    run() {
        const options = Options.getOptions();

        this.printAppTitle();
        fetchStockData(options.stock as string).then(this.displayStockData());
    }

    private displayStockData(): ((value: YahooQuoteResponse) => void | PromiseLike<void>) | null | undefined {
        return (sd) => {
            const res = sd.quoteResponse.result[0];
            const stringifiedStock = stringifyStock(res);
            console.log(getTextWrappedInBox(stringifiedStock));
        };
    }

    private printAppTitle() {
        const title = getPrimaryColoredText(AppTitle);
        console.log(getTextWrappedInBox(title));
    }
}

new App().run();
