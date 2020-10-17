import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@jstickets-shclone/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
