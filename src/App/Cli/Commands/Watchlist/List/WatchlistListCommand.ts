import { CommandModule } from 'yargs';
import { injectable } from 'inversify';
import ICommand from '../../ICommand';

@injectable()
export default class WatchlistListCommand implements ICommand<unknown, unknown> {
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
