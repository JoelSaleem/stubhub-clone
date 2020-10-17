import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@jstickets-shclone/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
