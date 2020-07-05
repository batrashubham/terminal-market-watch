import yargs from 'yargs';
import QuoteCommand from './Commands/Quote/QuoteCommand';
import { injectable, inject } from 'inversify';
import AppExecutor from '../AppExecutor';

@injectable()
export default class CliExecutor implements AppExecutor {
    @inject(QuoteCommand)
    private _quoteCommand!: QuoteCommand;

    execute(): void {
        yargs.command(this._quoteCommand.buildCommandObj()).demandCommand().help().argv;
    }
}
