import AbstractDisplay from './AbstractDisplay';

export default class StringDisplay extends AbstractDisplay {
  constructor(str) {
    super();
    this.str = str;
    this.width = str.length;
  }
  printLine() {
    process.stdout.write('+');
    [...Array(this.width)].forEach(() => {
      process.stdout.write('-');
    });
    process.stdout.write('+\n');
  }
  open() {
    this.printLine();
  }
  print() {
    process.stdout.write(`|${this.str}|\n`);
  }
  close() {
    this.printLine();
  }
}
