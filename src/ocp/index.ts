const axios = require('axios');

class AllExternalService {
  #url: string = 'https://jsonplaceholder.typicode.com/todos/';
  public async requestAllItems(cb: any): Promise<any> {
    await axios.get(this.#url).then(cb);
  }
}

const item = new AllExternalService();

item.requestAllItems((response: any) => console.log(response.data));
