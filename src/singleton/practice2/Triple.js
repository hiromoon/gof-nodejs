const Clazz = class {
  constructor(id) {
    this.id = id;
    process.stdout.write(`My Number is ${this.id}\n`);
  }
};
const singleton = [...Array(3)].map((_, i) => new Clazz(i));

export default class Triple {
  constructor() {
    throw new Error('constructor call is forbidden.\n');
  }
  static getInstance(id) {
    return singleton[id];
  }
}
