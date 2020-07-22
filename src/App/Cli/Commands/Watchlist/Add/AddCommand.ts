/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable } from 'inversify';
import { CommandModule } from 'yargs';

@injectable()
export default class AddCommand {
    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'add',
            describe: 'Add a watchlist.',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            handler: (arg: unknown) => {
                console.log('Add watchlist.');
            },
        };
    }
}
