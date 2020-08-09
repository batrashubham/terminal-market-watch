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

    addWatchListWithStocks(name: string, stocks: string[]): void {
        const conn = this._storage.getConnection();
        conn.serialize(() => {
            const addWatchlistQuery = 'INSERT INTO watchlist (name) VALUES(?)';
            const addWatchlistStockQuery = 'INSERT INTO watchlist_stocks (watchlist_id, stock_symbol) VALUES(?,?)';
            const getWatchlistIdQuery = 'SELECT id FROM watchlist WHERE name = ?';
            conn.run(addWatchlistQuery, name);
            for (const idx in stocks) {
                conn.get(getWatchlistIdQuery, [name], (_, row) => {
                    conn.run(addWatchlistStockQuery, [row.id, stocks[idx]]);
                });
            }
        });
    }
}
