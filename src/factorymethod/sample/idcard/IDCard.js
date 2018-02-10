import Product from '../framework/Product';

export default class IDCard extends Product {
  constructor(owner) {
    super();
    process.stdout.write(`Create ${owner}'s card.\n`);
    this.owner = owner;
  }
  use() {
    process.stdout.write(`Use ${this.owner}'s card.\n`);
  }

  getOwner() {
    return this.owner;
  }
}
