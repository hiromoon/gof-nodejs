import Builder from './Builder';

export default class TextBuilder extends Builder {
  constructor() {
    super();
    this.buffer = [];
  }
  makeTitle(title) {
    this.buffer.push('========================================');
    this.buffer.push(`[${title}]`);
    this.buffer.push('');
  }
  makeString(str) {
    this.buffer.push(`* ${str}`);
    this.buffer.push('');
  }
  makeItems(items) {
    items.forEach((item) => {
      this.buffer.push(`+ ${item}`);
    });
    this.buffer.push('');
  }
  close() {
    this.buffer.push('========================================');
  }
  getResult() {
    return this.buffer.join('\n');
  }
}
