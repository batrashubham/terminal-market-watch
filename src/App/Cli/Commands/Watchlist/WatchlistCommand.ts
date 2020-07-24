/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable, inject } from 'inversify';
import { CommandModule } from 'yargs';
import WatchlistAddCommand from './Add/WatchlistAddCommand';
import WatchlistListCommand from './List/WatchlistListCommand';
import ICommand from '../ICommand';

@injectable()
export default class WatchlistCommand implements ICommand<unknown, unknown> {
    @inject(WatchlistAddCommand)
    private _addCommand!: WatchlistAddCommand;

    @inject(WatchlistListCommand)
    private _listCommand!: WatchlistListCommand;

    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'watchlist',
            describe: 'Add, delete, list or edit watchlists.',
            builder: (yargs) =>
                yargs
                    .command(this._addCommand.buildCommandObj())
                    .command(this._listCommand.buildCommandObj())
                    .demandCommand(),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            handler: (arg: unknown) => {},
        };
    }
}
