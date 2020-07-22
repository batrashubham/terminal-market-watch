import { CommandModule } from 'yargs';
import { injectable } from 'inversify';

@injectable()
export default class ListCommand {
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
