import { ClientWrapper } from '../../src/ocp/infrastructure/clientWrapper';
import { TodoService } from '../../src/ocp/domain/TodoService';

describe('Open Close principle. - OCP', () => {
  test('Should be to expect response data to API', () => {
    const start = async (): Promise<any> => {
      const client = new ClientWrapper();
      const todoService = new TodoService(client);

      let result: string[] = [];
      await todoService
        .requestTodoItems((response: any) => response.data)
        .then((res: string[]) => (result = res));
      return result;
    };
    start().then((res: any[]) => {
      expect(res[0]).toMatchObject({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        completed: expect.any(Boolean),
      });
    });
  });
});
