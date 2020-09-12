const axios = require('axios');
export class ClinetWrapper {
  public async makeGetRequest(url: string, cb: any): Promise<any> {
    await axios.get(url).then(cb);
  }
}
