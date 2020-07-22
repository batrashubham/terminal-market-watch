/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable, inject } from 'inversify';
import { CommandModule } from 'yargs';
import AddCommand from './Add/AddCommand';
import ListCommand from './List/ListCommand';

@injectable()
export default class WatchlistCommand {
    @inject(AddCommand)
    private _addCommand!: AddCommand;

    @inject(ListCommand)
    private _listCommand!: ListCommand;

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
