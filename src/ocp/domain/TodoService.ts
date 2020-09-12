export class TodoService {
  public client: any;
  #url: string = 'https://jsonplaceholder.typicode.com/todos/';

  public constructor(client: any) {
    this.client = client;
  }
  public async requestTodoItems(cb: any): Promise<any> {
    return await this.client.makeGetRequest(this.#url, cb);
  }
}
