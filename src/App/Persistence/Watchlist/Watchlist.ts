import { Model, DataTypes, Sequelize } from 'sequelize';

interface WatchlistAttributes {
    id: number;
    name: string;
}

export default class Watchlist extends Model<WatchlistAttributes> implements WatchlistAttributes {
    public id!: number;

    public name!: string;
}

export function initializeWatchlist(sequelize: Sequelize): void {
    Watchlist.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        },
        {
            tableName: 'watchLists',
            sequelize,
        },
    );
}
