import { inject, injectable } from 'inversify';
import { renderAppBanner } from './View/AppBanner';
import Cli from './Cli/cli';

@injectable()
export default class App {
    @inject(Cli)
    private _cli!: Cli;

    run(): void {
        renderAppBanner();
        this._cli.execute();
    }
}
