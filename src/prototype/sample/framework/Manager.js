export default class Manager {
  constructor() {
    this.showcase = new Map();
  }
  register(name, proto) {
    this.showcase.set(name, proto);
  }
  create(protoname) {
    const p = this.showcase.get(protoname);
    return p.createClone();
  }
}
