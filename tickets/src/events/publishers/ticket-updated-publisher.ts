import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@jstickets-shclone/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
