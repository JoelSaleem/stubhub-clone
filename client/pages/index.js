import Router from "next/router";

const LandingPage = ({ currentUser, tickets }) => {
  // return <h1>{currentUser ? "Welcome" : "Please Sign In"}</h1>;
  const ticketList = tickets.map((ticket) => {
    return (
      <tr
        style={{ cursor: "pointer" }}
        key={ticket.id}
        onClick={() => {
          Router.push(`/tickets/${ticket.id}`);
        }}
      >
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
