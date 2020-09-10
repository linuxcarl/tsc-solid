export class NotificationService {
  notify(message: string): boolean {
    console.log('Sending message ...');
    console.log(message);
    return true;
  }
}
