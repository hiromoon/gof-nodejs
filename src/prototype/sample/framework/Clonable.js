export default class Clonable {
  clone() {
    return Object.assign({}, this);
  }
}
