import IRepository from './IRepository';
import { injectable, inject } from 'inversify';
import IStorage from './IStorage';
import { Deps } from '../DI/dependencies';

@injectable()
export default class Repository implements IRepository {
    private _storage: IStorage;

    constructor(@inject(Deps.Storage) storage: IStorage) {
        this._storage = storage;
    }

    addWatchlist(name: string): void {
        const addQuery = 'INSERT INTO watchlist (name) VALUES(?)';
        this._storage.getConnection().run(addQuery, [name]);
    }

    addWatchlistStock(watchlistId: number, stockSymbol: string): void {
        const addQuery = 'INSERT INTO watchlist_stocks (watchlist_id, stock_symbol) VALUES(?,?)';
        this._storage.getConnection().run(addQuery, [watchlistId, stockSymbol]);
    }
}
