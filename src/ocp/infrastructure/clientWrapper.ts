const axios = require('axios');
export class ClientWrapper {
  public async makeGetRequest(url: string, cb: any): Promise<any> {
    return await axios.get(url).then(cb);
  }
}
