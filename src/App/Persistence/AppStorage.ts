import { initializeWatchlist } from './Watchlist/Watchlist';
import { Sequelize } from 'sequelize';
import sqlite3 from 'sqlite3';
import IStorage from './IStorage';
import { injectable } from 'inversify';

@injectable()
export default class AppStorage implements IStorage {
    private sequelizeInstance: Sequelize;

    constructor() {
        // const userDB = new sqlite3.Database('./user1.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        //     // do your thing
        // });
        this.sequelizeInstance = new Sequelize('sqlite::~/.tmw/tmw.db');
        this.initialize();
    }

    getConnection(): Sequelize {
        return this.sequelizeInstance;
    }

    private initialize(): void {
        initializeWatchlist(this.sequelizeInstance);
    }
}
