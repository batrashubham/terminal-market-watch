import { CommandModule } from 'yargs';
import { injectable } from 'inversify';
import Command from '../../Command';

@injectable()
export default class WatchlistListCommand implements Command<unknown, unknown> {
    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'ls',
            describe: 'list all watchlists.',
            handler: () => {
                console.log('List Watchlists');
            },
        };
    }
}
