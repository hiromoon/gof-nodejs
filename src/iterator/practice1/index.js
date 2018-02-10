import BookShelf from './BookShelf';
import Book from './Book';

const bookShelf = new BookShelf(4);
bookShelf.appendBook(new Book('Arround the World in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));
bookShelf.appendBook(new Book('Erlang'));
bookShelf.appendBook(new Book('F#'));

const it = bookShelf.iterator();
while (it.hasNext()) {
  const book = it.next();
  console.log(book.getName());
}
