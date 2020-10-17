import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@jstickets-shclone/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

