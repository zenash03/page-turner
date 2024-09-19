let bookCollection = [
    {
        id : 'BK001',
        name : 'Site Analysis: Informing Context-Sensitive and Sustainable Site Planning and Design',
        author : 'James A. LaGro, Jr',
        imgURL : 'book-01.jpg',
        ISBN : '9781118123676',
        externalID : '530781',
        publisher : 'EBSCO',
        type: 'E-Book',
        callNumber : '-',
        edition : '-',
        year: '2013', 
        access : 'Unlimited',
        rate: 3
    },
    {
        id : 'BK002',
        name : 'Early Childhood Language Education and Literacy Practices in Ethiopia: Perspectives From Indigenous Knowledge, Gender and Instructional Practices',
        author : 'Kassahun Weldemariam, Margareth Sandvik, Moges Yigezu',
        imgURL : 'book-02.jpg',
        bibli : '-',
        ISBN : '9781032534428',
        externalID : '3700788',
        publisher : 'EBSCO',
        type: 'E-Book',
        callNumber : '-',
        edition : '-',
        year: '2023', 
        access : 'limited',
        rate: 4
    },
];

function Book(book) {
    this.id = book.id;
    this.name = book.name;
    this.author = book.author;
    this.imgURL = book.imgURL;
    this.ISBN = book.ISBN;
    this.externalID = book.externalID;
    this.publisher = book.publisher;
    this.type = book.type;
    this.callNumber = book.callNumber;
    this.edition = book.edition;
    this.year = book.year;
    this.access = book.access;
    this.rate = book.rate;

    this.generateRate = function() {
        let stars = '';
        for(let i = 0; i < 5; i++) {
            if(i < this.rate){
                stars += `<img class="icon-star" src="../../assets/Icons/star-solid.svg">`
                continue;
            }
            stars += `<img class="icon-star" src="../../assets/Icons/star-regular.svg">`
        }
        return stars;
    }

    this.appendBook = function() {
        let bookTemplate = `
        <div class="book" onclick="direct('${this.id}')">
            <img src="../../assets/Images/books/${this.imgURL}" alt="" class="book-image">
            <div class="book-description">
                <p class="book-type-name">${this.type}</p>
                <h4 class="book-title">${this.name}</h4>
                <p class="book-author">${this.author}</p>
                <h6 class="book-release">${this.year}</h6>
                <p class="book-rating">
                ${this.generateRate()}
                </p>
            </div>
        </div>
        `
        return bookTemplate;
    }
}
function generateCollection() {
    let temp = '';
    bookCollection.forEach(element => {
        const newBook = new Book(element);
        temp += newBook.appendBook();
    });
    
    return temp;
}

function findBookById(bookId) {
    return bookCollection.find(book => book.id == bookId);
}
function direct(bookId) {
    console.log(bookId)
    let params = new URLSearchParams();
    params.append('bookId', bookId)
    window.location.href = `./book-detail.html?${params.toString()}`
}
