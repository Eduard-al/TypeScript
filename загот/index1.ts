class Book {
    name: string
    genre: string
    pageAmount: number
    constructor(name: string, genre: string, pageAmount: number) {
        this.name = name
        this.genre = genre
        this.pageAmount = pageAmount
    }
}

const books: Book[] = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('Lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of trones', 'fantasy', 999)
]

function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations: boolean = true): Book | Book[] {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit
    }
    if (multipleRecommendations) {
        return books.filter(findAlgorithm)
    } else {
        return books.find(findAlgorithm)
    }
}

console.log(findSuitableBook('fantasy', 1000))