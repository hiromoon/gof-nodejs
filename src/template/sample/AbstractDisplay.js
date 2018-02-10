export default class AbstractDisplay {
  open() {
    throw new Error('open method is Unimplemented.');
  }
  print() {
    throw new Error('print method is Unimplemented.');
  }
  close() {
    throw new Error('close method is Unimplemented.');
  }
  display() {
    this.open();
    [...Array(5)].forEach(() => {
      this.print();
    });
    this.close();
  }
}
