import Product from './framework/Product';

export default class UnderlinePen extends Product {
  constructor(ulchar) {
    super();
    this.ulchar = ulchar;
  }
  use(s) {
    const len = s.length;
    process.stdout.write(`"${s}"\n`);
    for (let i = 0; i < len; i += 1) {
      process.stdout.write(this.ulchar);
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
    return new UnderlinePen(p.ulchar);
  }
}
