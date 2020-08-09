export default interface IRepository {
    addWatchlist(name: string): void;
    addWatchlistStock(watchlistId: number, stockSymbol: string): void;
}
