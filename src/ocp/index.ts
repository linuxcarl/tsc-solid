import { ClientWrapper } from './infrastructure/clientWrapper';
import { TodoService } from './domain/TodoService';

const start = async (): Promise<any> => {
  const client = new ClientWrapper();
  const todoService = new TodoService(client);

  let result: string[] = [];
  await todoService
    .requestTodoItems((response: any) => response.data)
    .then((res: string[]) => (result = res));
  return result;
};
start().then((r) => console.log(r[0]));
