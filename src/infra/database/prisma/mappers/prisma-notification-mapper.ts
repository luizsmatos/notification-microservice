import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(prismaNotificationData: PrismaNotification) {
    return new Notification(
      {
        category: prismaNotificationData.category,
        content: new Content(prismaNotificationData.content),
        recipientId: prismaNotificationData.recipientId,
        canceledAt: prismaNotificationData.canceledAt,
        readAt: prismaNotificationData.readAt,
        createdAt: prismaNotificationData.createdAt,
      },
      prismaNotificationData.id,
    );
  }
}

export { PrismaNotificationMapper };
