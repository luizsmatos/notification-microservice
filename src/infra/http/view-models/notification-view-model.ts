import { Notification } from '@app/entities/notification';

export interface NotificationHTTP {
  id: string;
  content: string;
  category: string;
  recipientId: string;
}

class NotificationViewModel {
  static toHTTP(notification: Notification): NotificationHTTP {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}

export { NotificationViewModel };
