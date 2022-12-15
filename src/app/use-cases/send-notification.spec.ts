import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

let notificationsRepository: InMemoryNotificationsRepository;
let sendNotification: SendNotification;

describe('Send notification', () => {
  beforeEach(() => {
    notificationsRepository = new InMemoryNotificationsRepository();
    sendNotification = new SendNotification(notificationsRepository);
  });

  it('should be able to send a notification', async () => {
    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Você recebeu uma nova solicitação',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
