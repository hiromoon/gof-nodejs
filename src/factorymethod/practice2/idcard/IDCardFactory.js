import Factory from '../framework/Factory';
import IDCard from './IDCard';

export default class IDCardFactory extends Factory {
  constructor() {
    super();
    this.owners = [];
  }
  createProduct(owner) {
    return new IDCard(owner, this.owners.length);
  }
  registerProduct(product) {
    this.owners.push(product.getOwner());
  }
  getOwners() {
    return this.owners;
  }
}
