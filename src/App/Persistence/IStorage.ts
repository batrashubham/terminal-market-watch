import { Database } from 'sqlite3';

export default interface IStorage {
    getConnection(): Database;
}
