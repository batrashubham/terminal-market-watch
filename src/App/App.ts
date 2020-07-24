import { inject, injectable } from 'inversify';
import { Deps } from './DI/dependencies';
import IAppExecutor from './IAppExecutor';

@injectable()
export default class App {
    private _executor: IAppExecutor;

    constructor(@inject(Deps.AppExecutor) executor: IAppExecutor) {
        this._executor = executor;
    }

    run(): void {
        this._executor.execute();
    }
}
