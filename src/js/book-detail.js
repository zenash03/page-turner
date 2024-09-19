let bookImage = document.getElementById('book-image');
let bookType = document.getElementById('book-type');
let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let bookRating = document.getElementById('book-rating');

let isbn = document.getElementById('isbn');
let externalID = document.getElementById('external-id');
let publisher = document.getElementById('publisher');
let collectionType = document.getElementById('collection-type');
let callNumber = document.getElementById('call-number');
let edition = document.getElementById('edition');
let year = document.getElementById('year');
let access = document.getElementById('access');

function loadBookData() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('bookId');

    console.log(bookId)    
    const book = new Book(findBookById(bookId));
    console.log(book)
    // console.log(book.id)

    bookImage.setAttribute('src', `../../assets/Images/books/${book.imgURL}`)
    bookType.innerHTML = book.type;
    bookTitle.innerHTML = book.name;
    bookAuthor.innerHTML = book.author;
    bookRating.innerHTML = book.rate;
    isbn.innerHTML = book.ISBN;
    externalID.innerHTML = book.externalID;
    publisher.innerHTML = book.publisher;
    collectionType.innerHTML = book.type;
    callNumber.innerHTML = book.callNumber;
    edition.innerHTML = book.edition;
    year.innerHTML = book.year;
    access.innerHTML = book.access;
    bookRating.innerHTML = book.generateRate()

    generateCollectionSimilar();
}
function generateCollectionSimilar() {
    const similarBook = document.getElementById('similar-book');
    similarBook.innerHTML = generateCollection();
}