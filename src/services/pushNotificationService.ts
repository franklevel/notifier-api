export class PushNotification {
  send(message: string, recipient: string): void {
    console.log(`Sending push notification to ${recipient}: ${message}`);
  }
}
