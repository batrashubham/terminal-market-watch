/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable, inject } from 'inversify';
import { CommandModule } from 'yargs';
import ICommand from '../../ICommand';
import IRepository from '../../../../Persistence/IRepository';
import { Deps } from '../../../../DI/dependencies';
import inquirer from 'inquirer';
import IStockService from '../../../../Services/Stocks/IStockService';
import StockService from '../../../../Services/Stocks/StockService';
import ora from 'ora';
import chalk from 'chalk';

@injectable()
export default class WatchlistAddCommand implements ICommand<unknown, unknown> {
    private _repository: IRepository;

    private _stockService: IStockService;

    constructor(
        @inject(Deps.Repository) repository: IRepository,
        @inject(Deps.StockService) stockService: StockService,
    ) {
        this._repository = repository;
        this._stockService = stockService;
    }

    private static WatchlistPrompts = [
        {
            type: 'input',
            name: 'watchlist_name',
            message: 'Enter a name for your watchlist.',
        },
        {
            type: 'input',
            name: 'watchlist_stocks',
            message: 'Enter stock symbol(s), comma separate multiple symbols.',
        },
    ];

    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'add',
            describe: 'Add a watchlist.',
            handler: this.createCommandHandler(),
        };
    }

    private createCommandHandler(): () => void {
        return () => {
            inquirer.prompt(WatchlistAddCommand.WatchlistPrompts).then(async (answer) => {
                const watchlistName = answer['watchlist_name'];
                const watchlistStocks = answer['watchlist_stocks'];
                const verifyLoader = ora('Verifying stock symbols').start();
                let stockSymbols: string[] = [];
                try {
                    stockSymbols = await this._stockService.validateStockSymbols(watchlistStocks);
                } catch (err) {
                    verifyLoader.fail(`Something went wrong while verifying symbols ${err.error}`);
                    return;
                }
                if (stockSymbols.length != 0) {
                    verifyLoader.fail(`Invalid stock symbols entered ${chalk.bold.red(stockSymbols.join(','))}`);
                    return;
                }
                verifyLoader.succeed('Stock symbols valid.');
                const saveLoader = ora('Saving watchlist').start();
                const stocksArr = watchlistStocks.split(',');
                this._repository.addWatchListWithStocks(watchlistName, stocksArr);
                saveLoader.succeed('Saved watchlist.');
            });
        };
    }
}
