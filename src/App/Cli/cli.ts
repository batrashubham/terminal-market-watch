import yargs from 'yargs';
import QuoteCommand from './Commands/quote';
import { injectable, inject } from 'inversify';

@injectable()
class Cli {
    @inject(QuoteCommand)
    private _quoteCommand!: QuoteCommand;

    execute(): void {
        yargs.command(this._quoteCommand.buildCommandObj()).demandCommand().help().argv;
    }
}

export default Cli;
