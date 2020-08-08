import IStorage from './IStorage';
import { injectable } from 'inversify';

@injectable()
export default class AppStorage implements IStorage {
    getConnection(): void {
        console.log('Get connection.');
    }
}
