import { inject, injectable } from 'inversify';
import { Deps } from './DI/dependencies';
import AppExecutor from './AppExecutor';

@injectable()
export default class App {
    private _executor!: AppExecutor;

    constructor(@inject(Deps.AppExecutor) executor: AppExecutor) {
        this._executor = executor;
    }

    run(): void {
        this._executor.execute();
    }
}
