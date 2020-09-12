export class TodoService {
  public client: any;
  #url: string = 'https://jsonplaceholder.typicode.com/todos/';
  public constructor(client: any) {
    this.client = client;
  }
  public requestTodoItems(cb: any): void {
    console.log(typeof cb);
    this.client.makeGetRequest(this.#url, cb);
  }
}
