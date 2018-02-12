import fs from 'fs';
import Builder from './Builder';

export default class HTMLBuilder extends Builder {
  constructor() {
    super();
    this.filename = null;
    this.writer = null;
  }
  makeTitle(title) {
    this.filename = `${title}.html`;
    this.writer = fs.createWriteStream(this.filename, 'utf8');
    this.writer.write(`<html>\n<head><title>${title}</title></head>\n<body>\n`);
    this.writer.write(`<h1>${title}</h1>\n`);
  }
  makeString(str) {
    this.writer.write(`<p>${str}</p>\n`);
  }
  makeItems(items) {
    this.writer.write('<ul>\n');
    items.forEach((item) => {
      this.writer.write(`<li>${item}</li>`);
    });
    this.writer.write('</ul>\n');
  }
  close() {
    this.writer.write('</body>\n</html>\n');
    this.writer.end();
  }
  getResult() {
    return this.filename;
  }
}
