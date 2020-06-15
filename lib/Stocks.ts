import axios from 'axios';

interface Result{
    result: Array<StockData>;
}

interface QuoteResponse{
    quoteResponse: Result;
}

interface StockData{
    currency: string;
    shortName: string;
    longName: string;
    market: string;
    fullExchangeName: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketOpen: number;
    marketCap: number;
    exchangeDataDelayedBy: number;
    fiftyTwoWeekRange: string;
    sharesOutstanding: number;
    fiftyDayAverage: number;
    symbol: string;
}

const yahooFinanceUrl = 'https://query1.finance.yahoo.com/v7/finance/quote';

class Stocks {

    static async getStockData(stockCode: string): Promise<QuoteResponse> {
       var result = await axios.get<QuoteResponse>(yahooFinanceUrl, {
            params: {
              lang: "en_IN",
              region: "IN",
              corsDomain: "finance.yahoo.com",
              symbols: stockCode
            }
          });
          return result.data;
    }

}

export default Stocks;
