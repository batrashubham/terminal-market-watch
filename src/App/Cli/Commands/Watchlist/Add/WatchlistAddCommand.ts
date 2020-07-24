/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable } from 'inversify';
import { CommandModule } from 'yargs';
import ICommand from '../../ICommand';

@injectable()
export default class WatchlistAddCommand implements ICommand<unknown, unknown> {
    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'add',
            describe: 'Add a watchlist.',
            handler: () => {
                console.log('Add watchlist.');
            },
        };
    }
}
