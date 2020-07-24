import yargs from 'yargs';
import QuoteCommand from './Commands/Quote/QuoteCommand';
import { injectable, inject } from 'inversify';
import IAppExecutor from '../IAppExecutor';
import WatchlistCommand from './Commands/Watchlist/WatchlistCommand';

@injectable()
export default class CliExecutor implements IAppExecutor {
    @inject(QuoteCommand)
    private _quoteCommand!: QuoteCommand;

    @inject(WatchlistCommand)
    private _watchListCommand!: WatchlistCommand;

    execute(): void {
        yargs
            .command(this._quoteCommand.buildCommandObj())
            .command(this._watchListCommand.buildCommandObj())
            .demandCommand()
            .help().argv;
    }
}
