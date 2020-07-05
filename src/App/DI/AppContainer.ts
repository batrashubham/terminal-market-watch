import { Container } from 'inversify';
import { Deps } from './dependencies';
import StockDataProvider from '../Stocks/StockProviders/StockDataProvider';
import YahooStockDataProvider from '../Stocks/StockProviders/Yahoo/YahooStockDataProvider';
import StockDataTransformer from '../Stocks/StockProviders/StockDataTransformer';
import YahooDataTransformer from '../Stocks/StockProviders/Yahoo/YahooDataTransformer';
import StockService from '../Stocks/StockService';
import App from '../App';
import QuoteCommand from '../Cli/Commands/quote';
import Cli from '../Cli/cli';

class AppContainer {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.initialize();
    }

    startApplication(): void {
        this.container.resolve(App).run();
    }

    private initialize(): void {
        this.initializeAppBindings();
        this.initializeStockBindinds();
        this.initializeCLI();
    }

    private initializeCLI(): void {
        this.container.bind<QuoteCommand>(QuoteCommand).toSelf();
        this.container.bind<Cli>(Cli).toSelf();
    }

    private initializeStockBindinds(): void {
        this.container.bind<StockService>(StockService).toSelf();
        this.container.bind<StockDataProvider>(Deps.StockDataProvider).to(YahooStockDataProvider);
        this.container.bind<StockDataTransformer>(Deps.StockDataTransformer).to(YahooDataTransformer);
    }

    private initializeAppBindings(): void {
        this.container.bind<App>(App).toSelf().inSingletonScope();
    }
}

export default AppContainer;
