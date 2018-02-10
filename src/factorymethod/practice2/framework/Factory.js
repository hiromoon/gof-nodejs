export default class Factory {
  create(owner) {
    const p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
  createProduct() {
    throw new Error('createProduct method is Unimplemented.');
  }
  registerProduct() {
    throw new Error('registerProduct method is Unimplemented.');
  }
}
