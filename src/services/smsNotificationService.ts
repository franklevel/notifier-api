export class SMSNotification {
  send(message: string, recipient: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}
