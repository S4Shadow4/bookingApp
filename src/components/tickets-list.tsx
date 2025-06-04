import { Ticket } from '@/types/type';
import TicketCard from './ticket-card';

export function TicketList({ Tickets }: { Tickets: Array<Ticket> }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Tickets.map((ticket: Ticket) => (
        <TicketCard key={ticket.id} data={ticket} />
      ))}
    </div>
  );
}
