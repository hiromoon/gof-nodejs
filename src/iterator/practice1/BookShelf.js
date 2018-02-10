import Aggregate from './Aggregate';
import BookShelfIterator from './BookShelfIterator';

export default class BookShelf extends Aggregate {
  constructor() {
    super();
    this.books = new Array();
    this.last = 0;
  }
  getBookAt(index) {
    return this.books[index];
  }
  appendBook(book) {
    this.books.push(book);
    this.last += 1;
  }
  getLength() {
    return this.last;
  }
  iterator() {
    return new BookShelfIterator(this);
  }
}
