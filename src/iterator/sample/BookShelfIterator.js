import Iterator from './Iterator';

export default class BookShelfIterator extends Iterator {
  constructor(bookShelf) {
    super();
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  hasNext() {
    return this.index < this.bookShelf.getLength();
  }
  next() {
    const book = this.bookShelf.getBookAt(this.index);
    this.index += 1;
    return book;
  }
}
