import { Container } from 'inversify';
import { TYPES } from './types';
import StockDataProvider from '../Stocks/StockProviders/StockDataProvider';
import YahooStockDataProvider from '../Stocks/StockProviders/Yahoo/YahooStockDataProvider';
import StockDataTransformer from '../Stocks/StockProviders/StockDataTransformer';
import YahooDataTransformer from '../Stocks/StockProviders/Yahoo/YahooDataTransformer';
import Stocks from '../Stocks/Stocks';
import App from '../App';

const container = new Container();

container.bind<App>(App).toSelf().inSingletonScope();
container.bind<Stocks>(Stocks).toSelf();
container.bind<StockDataProvider>(TYPES.StockDataProvider).to(YahooStockDataProvider);
container.bind<StockDataTransformer>(TYPES.StockDataTransformer).to(YahooDataTransformer);

export { container };
