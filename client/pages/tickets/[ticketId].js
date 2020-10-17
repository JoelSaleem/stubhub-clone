import useRequest from "../../hooks/useRequest";
import Router from "next/router";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket && ticket.id,
    },
    onSuccess: (order) => {
      Router.push("/orders/[orderId]", `/orders/${order.id}`);
    },
  });

  if (!ticket) return null;

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>{ticket.price}</h4>
      {errors}
      <button
        onClick={() => {
          doRequest();
        }}
        className="btn btn-primary"
      >
        Purchase
      </button>
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;

  try {
    const { data } = await client.get(`/api/tickets/${ticketId}`);
    return { ticket: data };
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default TicketShow;
