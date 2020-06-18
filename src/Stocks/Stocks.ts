import axios from 'axios';
import { QuoteResponse } from './Types';

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
