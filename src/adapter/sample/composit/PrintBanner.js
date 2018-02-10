import Print from './Print';
import Banner from './Banner';

export default class PrintBanner extends Print {
  constructor(str) {
    super();
    this.banner = new Banner(str);
  }
  printWeak() {
    this.banner.showWithParen();
  }
  printStrong() {
    this.banner.showWithAster();
  }
}
