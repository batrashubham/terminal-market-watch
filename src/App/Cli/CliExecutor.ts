import yargs from 'yargs';
import Quote from './Commands/quote';
import { injectable, inject } from 'inversify';
import AppExecutor from '../AppExecutor';

@injectable()
export default class CliExecutor implements AppExecutor {
    @inject(Quote)
    private _quoteCommand!: Quote;

    execute(): void {
        yargs.command(this._quoteCommand.buildCommandObj()).demandCommand().help().argv;
    }
}
