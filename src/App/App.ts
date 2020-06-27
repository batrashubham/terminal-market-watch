import { inject, injectable } from 'inversify';
import Options from './Commands/options';
import { StockQuote } from './Stocks/StockProviders/types';
import StockService from './Stocks/StockService';
import { getTextWrappedInBox } from './View/boxUtils';
import { stringifyStockQuote } from './Stocks/stockUtils';
import { renderAppBanner } from './View/AppBanner';

@injectable()
export default class App {
    private _stockService: StockService;

    constructor(@inject(StockService) stockService: StockService) {
        this._stockService = stockService;
    }

    run(): void {
        const options = Options.getOptions();
        renderAppBanner();
        this._stockService.getQuote(options.stock as string).then(this.displayStockData());
    }

    private displayStockData(): (value: StockQuote) => void {
        return (sd) => {
            const stringifiedStock = stringifyStockQuote(sd);
            console.log(getTextWrappedInBox(stringifiedStock));
        };
    }
}
