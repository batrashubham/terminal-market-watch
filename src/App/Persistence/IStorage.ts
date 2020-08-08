import { Sequelize } from 'sequelize/types';

export default interface IStorage {
    getConnection(): Sequelize;
}
