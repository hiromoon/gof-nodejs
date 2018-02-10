import AbstractDisplay from './AbstractDisplay';

export default class CharDisplay extends AbstractDisplay {
  constructor(ch) {
    super();
    this.ch = ch;
  }
  open() {
    process.stdout.write('<<');
  }
  print() {
    process.stdout.write(this.ch);
  }
  close() {
    process.stdout.write('>>\n');
  }
}
