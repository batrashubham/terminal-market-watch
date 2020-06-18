#!/usr/bin/env node
import Options from './Options'
import { getPrimaryColoredText } from './View/TextUtils';
import { getTextWrappedInBox } from './View/BoxUtils';
import Stocks from './Stocks/Stocks';
import { AppTitle } from './Constants/Constants';
import { QuoteResponse } from './Stocks/Types';
import { stringifyStock } from './Stocks/StockUtils';

class App {

    run() {
        const options = Options.getOptions();

        this.printAppTitle();

        Stocks.getStockData(options.stock as string)
            .then(this.displayStockData());

    }

    private displayStockData(): ((value: QuoteResponse) => void | PromiseLike<void>) | null | undefined {
        return sd => {
            var res = sd.quoteResponse.result[0];
            var stringifiedStock = stringifyStock(res);
            console.log(getTextWrappedInBox(stringifiedStock));
        };
    }

    private printAppTitle() {
        var title = getPrimaryColoredText(AppTitle);
        console.log(getTextWrappedInBox(title));
    }
}

new App().run();