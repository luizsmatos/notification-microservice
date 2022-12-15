import { IsNotEmpty, IsUUID, Length } from 'class-validator';

class CreateNotificationDTO {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}

export { CreateNotificationDTO };
