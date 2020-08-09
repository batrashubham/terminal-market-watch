/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable, inject } from 'inversify';
import { CommandModule } from 'yargs';
import ICommand from '../../ICommand';
import IRepository from '../../../../Persistence/IRepository';
import { Deps } from '../../../../DI/dependencies';
import inquirer from 'inquirer';

@injectable()
export default class WatchlistAddCommand implements ICommand<unknown, unknown> {
    private _repository: IRepository;

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

    constructor(@inject(Deps.Repository) repository: IRepository) {
        this._repository = repository;
    }

    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'add',
            describe: 'Add a watchlist.',
            handler: this.createCommandHandler(),
        };
    }

    private createCommandHandler(): () => void {
        return () => {
            inquirer.prompt(WatchlistAddCommand.WatchlistPrompts).then((answer) => {
                const watchlistName = answer['watchlist_name'];
                const watchlistStocks = answer['watchlist_stocks'];
                const stocksArr = watchlistStocks.split(',');
                console.log('stocks', stocksArr);
                this._repository.addWatchListWithStocks(watchlistName, stocksArr);
            });
        };
    }
}
