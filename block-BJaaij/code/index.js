class Book {
  constructor(title, catagory, author) {
    this.title = title;
    this.catagory = catagory;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.new();
  }
}

class Booklist {
  constructor() {
    this.AllBooks = [];
    this.index = 0;
  }
  add(arr = []) {
    this.AllBooks = this.AllBooks.concat(arr);
    return this.AllBooks;
  }
  getCurrentBook() {
    return this.AllBooks[this.index];
  }
  getNextBook() {
    return this.AllBooks[this.index + 1];
  }
  getPrevBook() {
    return this.AllBooks[this.index - 1];
  }
  changeCurrentBook(num) {
    this.index = num;
  }
}

let book1 = new Book(`The Sun and her Flowers`, `Poetry`, `Rupi Kaur`);
let book2 = new Book(`The First World War`, `History`, `Michael Howard`);
let book3 = new Book(`The Fiery Trial`, `Civil War`, `Eric Foner`);
let book4 = new Book(`To The Ends of the Earth`, `British Empire`, `TM Devine`);
let book5 = new Book(`A Game of Thrones`, `Fantasy`, `George R.R. Martin`);

let bookList1 = new Booklist();

bookList1.add([book1, book2, book3, book4, book5]);
