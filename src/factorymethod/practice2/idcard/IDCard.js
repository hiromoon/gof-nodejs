import Product from '../framework/Product';

export default class IDCard extends Product {
  constructor(owner, id) {
    super();
    process.stdout.write(`Create ${owner}'s card.ID: ${id}\n`);
    this.owner = owner;
    this.id = id;
  }
  use() {
    process.stdout.write(`Use ${this.owner}'s card.ID: ${this.id}\n`);
  }

  getOwner() {
    return this.owner;
  }
  getId() {
    return this.id;
  }
}
