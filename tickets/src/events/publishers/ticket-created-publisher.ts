import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@jstickets-shclone/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
