import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sgtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
