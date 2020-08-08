import { inject, injectable } from 'inversify';
import { Deps } from './DI/dependencies';
import IAppExecutor from './IAppExecutor';
import IStorage from './Persistence/IStorage';

@injectable()
export default class App {
    private _executor: IAppExecutor;

    private _storage: IStorage;

    constructor(@inject(Deps.AppExecutor) executor: IAppExecutor, @inject(Deps.Storage) storage: IStorage) {
        this._executor = executor;
        this._storage = storage;
    }

    run(): void {
        this._executor.execute();
    }
}
