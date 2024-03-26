export class EmailNotification {
  send(message: string, recipient: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}
