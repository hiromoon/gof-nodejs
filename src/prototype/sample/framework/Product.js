import Clonable from './Clonable';

export default class Product extends Clonable {
  use() {
    throw new Error('use method is unimplemented.');
  }
  createClone() {
    throw new Error('createClone method is unimplemented.');
  }
}
