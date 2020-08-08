import { Deps } from './dependencies';
import IStockDataSource from '../Services/Stocks/StockDataSource/IStockDataSource';
import YahooStockDataSource from '../Services/Stocks/StockDataSource/Yahoo/YahooStockDataSource';
import IStockDataTransformer from '../Services/Stocks/StockDataSource/IStockDataTransformer';
import YahooDataTransformer from '../Services/Stocks/StockDataSource/Yahoo/YahooDataTransformer';
import StockService from '../Services/Stocks/StockService';
import QuoteCommand from '../Cli/Commands/Quote/QuoteCommand';
import CliExecutor from '../Cli/CliExecutor';
import BaseAppContainer from './BaseAppContainer';
import IAppExecutor from '../IAppExecutor';
import IStockService from '../Services/Stocks/IStockService';
import WatchlistCommand from '../Cli/Commands/Watchlist/WatchlistCommand';
import WatchlistAddCommand from '../Cli/Commands/Watchlist/Add/WatchlistAddCommand';
import WatchlistListCommand from '../Cli/Commands/Watchlist/List/WatchlistListCommand';
import IStorage from '../Persistence/IStorage';
import AppStorage from '../Persistence/AppStorage';

export default class CliAppContainer extends BaseAppContainer {
    initialize(): void {
        this.initializeStockBindinds();
        this.initializeCLI();
        this.initializeStorage();
    }

    private initializeStorage(): void {
        this.container.bind<IStorage>(Deps.Storage).to(AppStorage).inSingletonScope();
    }

    private initializeCLI(): void {
        this.container.bind<QuoteCommand>(QuoteCommand).toSelf();
        this.container.bind<WatchlistCommand>(WatchlistCommand).toSelf();
        this.container.bind<WatchlistAddCommand>(WatchlistAddCommand).toSelf();
        this.container.bind<WatchlistListCommand>(WatchlistListCommand).toSelf();
        this.container.bind<IAppExecutor>(Deps.AppExecutor).to(CliExecutor);
    }

    private initializeStockBindinds(): void {
        this.container.bind<IStockService>(Deps.StockService).to(StockService);
        this.container.bind<IStockDataSource>(Deps.StockDataSource).to(YahooStockDataSource);
        this.container.bind<IStockDataTransformer>(Deps.StockDataTransformer).to(YahooDataTransformer);
    }
}
