import { Message } from "node-nats-streaming";
import {
  TicketCreatedEvent,
  Listener,
  Subjects,
} from "@jstickets-shclone/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const ticket = Ticket.build({
      price: data.price,
      title: data.title,
      id: data.id,
    });

    await ticket.save();

    msg.ack();
  }
}
