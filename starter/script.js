const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}


function getBook(id){
  return data.find((d)=>d.id===id);
}

/*
// Destructuring 
const book=getBook(1);
book
// const title= books.title;
// const author=books.author
const{title,author,pages,publicationDate,genres,hasMovieAdaptation}=book;
const updatedBook = {
  ...book,              // Spread the original book object
  moviePublicationDate: "2001-12-19",  // Add a new property
  //overwriting 
  pages: 1210           // Ensure pages property is updated here, after spreading
};

console.log(updatedBook);  // Now the pages should be 1210

updatedBook

// traditional method of writing a function 

// function getYear(sty){ // this is function declaration 
//   return sty.split("_"[0]);


// }
const getYear=(str)=>str.split("-"[0]); // this function expression 
console.log(getYear(publicationDate));

// const primaryGenre=genres[0];
// const secondaryGenre=genres[1];
const  [primaryGenre,secondaryGenre,...otherGenre]=genres;// this rest operator  
const newGenre=["leul",...genres];// this is spread operator 
console.log(newGenre);
console.log(primaryGenre,secondaryGenre,otherGenre)
console.log(author,title, genres);

const summary = `${title},a ${pages}-page long book, was written by ${author},and published in ${getYear(publicationDate)}`
summary

const spanishTranslation =book.translations.spanish && " Not Translated";
spanishTranslation
const count =book.reviews.librarything.reviewsCount ?? "no data ";
count
function getTotalReviewCount(book){
  const goodreads=book.reviews.goodreads.reviewsCount;
  const librarything=book.reviews?.librarything?.reviewsCount??0;
  librarything;
  return goodreads+librarything;
}
console.log(getTotalReviewCount(book))
*/

/*
const books = getBooks();
books
const ar =[1,2,3,4,5];
const arr=ar.map((e)=>e+2);
arr
const titles= books.map((book)=>book.title);
titles
const author= books.map((book)=>book.author);
author
function getTotalReviewCount(book){
  const goodreads=book.reviews.goodreads.reviewsCount;
  const librarything=book.reviews?.librarything?.reviewsCount??0;
  librarything;
  return goodreads+librarything;
}
//  map method 
const essentialData=books.map((book)=>({
  titles:book.title,
  author:book.author,
  reviewsCount:getTotalReviewCount(book),


}));
essentialData
// filter method 
const longBooksWithMovie= books
.filter((book)=>book.pages>500).filter((book)=>book.hasMovieAdaptation)
longBooksWithMovie

const adventureBooks=books
.filter((books)=>books.genres.includes("adventure"))
.map((book)=>book.title);
adventureBooks
// filter method 
const PageAllPages= books.reduce((sum,book)=>sum + book.pages,0);
PageAllPages
const array=[3,7,1,9,6];
const sorted =array.slice().sort((a,b)=>a-b);
sorted
array
sortPageNumber = books.slice().sort((a,b)=>books.a-books.b)
sortPageNumber


// add  book object to array
const newBook={
  id:6,
  title:"Harry potter and Chamber of Secrete ",
  author:"J. K. Rowling"
  
}
const booksAfterAdd=[...books,newBook];
booksAfterAdd;

// Delete a book object for  the array 
const booksAfterDelete=booksAfterAdd.filter((book)=>book.id !==3);
booksAfterDelete


//books After Delete
const booksAfterUpdate=booksAfterDelete.map((book)=>book.id===1 ? {...book, pages:120}:book);
booksAfterUpdate

*/

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>res.json())
// .then((data)=>console.log(data));
// console.log("Leul")

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data =await res.json();
  console.log(data)

  return data;
  
}
 const todos =getTodos();
 console.log(todos)







