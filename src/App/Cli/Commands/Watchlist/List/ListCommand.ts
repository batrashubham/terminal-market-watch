import { CommandModule } from 'yargs';
import { injectable } from 'inversify';

@injectable()
export default class ListCommand {
    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'ls',
            describe: 'list all watchlists.',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            handler: (arg: unknown) => {
                console.log('List Watchlists');
            },
        };
    }
}
