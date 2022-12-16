import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id',
    content: new Content('Você recebeu uma nova solicitação'),
    category: 'social',
    ...override,
  });
}

export { makeNotification };
