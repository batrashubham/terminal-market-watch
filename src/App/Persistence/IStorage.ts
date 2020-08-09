import { Database } from 'sqlite3';

export default interface IStorage {
    close(): void;
    getConnection(): Database;
}
