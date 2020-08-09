/* eslint-disable @typescript-eslint/no-empty-function */
import { injectable, inject } from 'inversify';
import { CommandModule } from 'yargs';
import ICommand from '../../ICommand';
import IRepository from '../../../../Persistence/IRepository';
import { Deps } from '../../../../DI/dependencies';

@injectable()
export default class WatchlistAddCommand implements ICommand<unknown, unknown> {
    private _repository: IRepository;

    constructor(@inject(Deps.Repository) repository: IRepository) {
        this._repository = repository;
    }

    buildCommandObj(): CommandModule<unknown, unknown> {
        return {
            command: 'add',
            describe: 'Add a watchlist.',
            handler: this.createCommandHandler(),
        };
    }

    private createCommandHandler(): () => void {
        return () => {};
    }
}
