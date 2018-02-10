import Print from './Print';
import Banner from './Banner';

const mixinClass = Print(Banner);

export default class PrintBanner extends mixinClass {
  printWeak() {
    this.showWithParen();
  }
  printStrong() {
    this.showWithAster();
  }
}
