import Product from './framework/Product';

export default class MessageBox extends Product {
  constructor(decochar) {
    super();
    this.decochar = decochar;
  }
  use(s) {
    const len = s.length;
    for (let i = 0; i < len + 4; i += 1) {
      process.stdout.write(this.decochar);
    }
    process.stdout.write('\n');
    process.stdout.write(`${this.decochar} ${s} ${this.decochar}\n`);
    for (let i = 0; i < len + 4; i += 1) {
      process.stdout.write(this.decochar);
    }
    process.stdout.write('\n');
  }
  createClone() {
    let p = null;
    try {
      p = this.clone();
    } catch (e) {
      throw e;
    }
    return new MessageBox(p.decochar);
  }
}
