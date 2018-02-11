import TicketMaker from './TicketMaker';

for (let i = 0; i < 10; i += 1) {
  const ticketMaker = TicketMaker.getInstance();
  process.stdout.write(`Ticket Number: ${ticketMaker.getNextTicketNumber()}\n`);
}
process.stdout.write('End');
