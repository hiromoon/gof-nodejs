let ticket = 1000;
const singleton = new class {
  getNextTicketNumber() {
    ticket += 1;
    return ticket;
  }
}();

export default class TicketMaker {
  constructor() {
    throw new Error('constructor call is forbidden.');
  }
  static getInstance() {
    return singleton;
  }
}
