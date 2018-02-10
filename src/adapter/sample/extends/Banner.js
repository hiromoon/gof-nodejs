export default class Banner {
  constructor(str) {
    this.str = str;
  }
  showWithParen() {
    console.log(`(${this.str})`);
  }
  showWithAster() {
    console.log(`*${this.str}*`);
  }
}
