import IStorage from './IStorage';
import { injectable } from 'inversify';
import sqlite3, { Database } from 'sqlite3';
import fs from 'fs';
import path from 'path';

@injectable()
export default class AppStorage implements IStorage {
    private _db!: Database;

    constructor() {
        this.initializeDatabase();
        this.createTables();
    }

    getConnection(): void {
        console.log('Get connection.');
    }

    private initializeDatabase(): void {
        const homeEnv = process.platform === 'win32' ? process.env.HOMEPATH : process.env.HOME;
        const homeDir = homeEnv ? homeEnv.toString() : '';
        const appDir = path.join(homeDir, '.tmw');
        if (!fs.existsSync(appDir)) {
            fs.mkdirSync(appDir);
        }
        const dbPath = path.join(appDir, 'tmw.db');
        this._db = new sqlite3.Database(dbPath);
    }

    private createTables(): void {
        this._db.run(
            'CREATE TABLE IF NOT EXISTS watchlist( id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(100) NOT NULL)',
        );
        this._db.run(
            'CREATE TABLE IF NOT EXISTS watchlist_stocks( id INTEGER PRIMARY KEY AUTOINCREMENT, watchlist_id INTEGER NOT NULL, stock_code varchar(100) NOT NULL, FOREIGN KEY(watchlist_id) REFERENCES watchlist(id))',
        );
    }
}
