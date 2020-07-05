import { Deps } from './dependencies';
import StockDataSource from '../Services/Stocks/StockDataSource/StockDataSource';
import YahooStockDataSource from '../Services/Stocks/StockDataSource/Yahoo/YahooStockDataSource';
import StockDataTransformer from '../Services/Stocks/StockDataSource/StockDataTransformer';
import YahooDataTransformer from '../Services/Stocks/StockDataSource/Yahoo/YahooDataTransformer';
import StockServiceImpl from '../Services/Stocks/StockServiceImpl';
import QuoteCommand from '../Cli/Commands/Quote/QuoteCommand';
import CliExecutor from '../Cli/CliExecutor';
import BaseAppContainer from './BaseAppContainer';
import AppExecutor from '../AppExecutor';
import StockService from '../Services/Stocks/StockService';

export default class CliAppContainer extends BaseAppContainer {
    initialize(): void {
        this.initializeStockBindinds();
        this.initializeCLI();
    }

    private initializeCLI(): void {
        this.container.bind<QuoteCommand>(QuoteCommand).toSelf();
        this.container.bind<AppExecutor>(Deps.AppExecutor).to(CliExecutor);
    }

    private initializeStockBindinds(): void {
        this.container.bind<StockService>(Deps.StockService).to(StockServiceImpl);
        this.container.bind<StockDataSource>(Deps.StockDataSource).to(YahooStockDataSource);
        this.container.bind<StockDataTransformer>(Deps.StockDataTransformer).to(YahooDataTransformer);
    }
}
