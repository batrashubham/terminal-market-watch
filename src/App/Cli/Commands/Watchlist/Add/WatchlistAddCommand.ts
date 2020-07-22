/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable } from 'inversify';
import { CommandModule } from 'yargs';
import Command from '../../Command';

@injectable()
export default class WatchlistAddCommand implements Command<unknown, unknown> {
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
