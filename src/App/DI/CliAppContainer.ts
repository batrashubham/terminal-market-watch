import { Deps } from './dependencies';
import StockDataProvider from '../Stocks/StockProviders/StockDataProvider';
import YahooStockDataProvider from '../Stocks/StockProviders/Yahoo/YahooStockDataProvider';
import StockDataTransformer from '../Stocks/StockProviders/StockDataTransformer';
import YahooDataTransformer from '../Stocks/StockProviders/Yahoo/YahooDataTransformer';
import StockService from '../Stocks/StockService';
import Quote from '../Cli/Commands/quote';
import CliExecutor from '../Cli/CliExecutor';
import BaseAppContainer from './BaseAppContainer';
import AppExecutor from '../AppExecutor';

export default class CliAppContainer extends BaseAppContainer {
    initialize(): void {
        this.initializeStockBindinds();
        this.initializeCLI();
    }

    private initializeCLI(): void {
        this.container.bind<Quote>(Quote).toSelf();
        this.container.bind<AppExecutor>(Deps.AppExecutor).to(CliExecutor);
    }

    private initializeStockBindinds(): void {
        this.container.bind<StockService>(StockService).toSelf();
        this.container.bind<StockDataProvider>(Deps.StockDataProvider).to(YahooStockDataProvider);
        this.container.bind<StockDataTransformer>(Deps.StockDataTransformer).to(YahooDataTransformer);
    }
}
