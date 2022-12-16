import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

let notificationsRepository: InMemoryNotificationsRepository;
let countRecipientNotifications: CountRecipientNotifications;

describe('Count recipients notifications', () => {
  beforeEach(() => {
    notificationsRepository = new InMemoryNotificationsRepository();
    countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );
  });

  it('should be able to count recipient notifications', async () => {
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
