import { inject, injectable } from 'inversify';
import { Deps } from './DI/dependencies';

@injectable()
export default class App {
    @inject(Deps.AppExecutor)
    private _executor!: AppExecutor;

    run(): void {
        this._executor.execute();
    }
}
