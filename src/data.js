
const usersData = [
    {
        id: 1,
        name: "User1",
        shelves: [
            {
                shelfName: "Reading",
                books: [
                    {
                        id: "0",
                        order: "0",
                        isbn: "9780141199672",
                        title: "Sense and Sensibility",
                        author: "Austen, Jane",
                        facing: "front",
                        publicationDate: "2012",
                        PageCount: "400",
                        thumbnail: "https://images.isbndb.com/covers/96/72/9780141199672.jpg",
                    },
                    {
                        id: "1",
                        order: "1",
                        isbn: "9780140430646",
                        title: "A Connecticut Yankee in King Arthur's Court",
                        author: "Mark Twain",
                        facing: "front",
                        publicationDate: "1889",
                        PageCount: "468",
                        thumbnail: "https://cdn.penguin.co.uk/dam-assets/books/9780140430646/9780140430646-jacket-large.jpg",
                    },
                    {
                        id: "2",
                        order: "2",
                        isbn: "9780141907819",
                        title: "Persuasion",
                        author: "Jane Austen",
                        facing: "front",
                        publicationDate: "2006",
                        PageCount: "289",
                        thumbnail: "https://cdn.penguin.co.uk/dam-assets/books/9780141439686/9780141439686-jacket-large.jpg",
                    },
                    {
                        id: "3",
                        order: "3",
                        isbn: "9780099589334",
                        title: "Pride and Prejudice",
                        author: "Jane Austen",
                        facing: "front",
                        publicationDate: "2014",
                        PageCount: "468",
                        thumbnail: "http://books.google.com/books/content?id=3_TiAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    },
                ],
                privacy: "public",
                order: "0",
            },
        ],
        following: ["User2", "User3"],
        followers: ["User2", "User3"],
        privacy: "public",
    },
    {
        id: 2,
        name: "User2",
        shelves: [
            {
                shelfName: "Fiction",
                books: [
                    {
                        id: "0",
                        order: "0",
                        isbn: "9780061120084",
                        title: "To Kill a Mockingbird",
                        author: "Harper Lee",
                        facing: "front",
                        publicationDate: "2005",
                        pageCount: "336",
                        thumbnail:
                            "https://images.isbndb.com/covers/00/81/9780061120084.jpg",
                    },
                    {
                        id: "1",
                        order: "1",
                        isbn: "9780307594009",
                        title: "The Girl with the Dragon Tattoo",
                        author: "Stieg Larsson",
                        facing: "front",
                        publicationDate: "2011",
                        pageCount: "672",
                        thumbnail:
                            "https://images.isbndb.com/covers/00/09/9780307594009.jpg",
                    },
                ],
                privacy: "private",
                order: "0",
            },
        ],
        following: ["User1", "User3"],
        followers: ["User1", "User3"],
        privacy: "private",
    },
    // Another additional user based on the structure
    {
        id: 3,
        name: "User3",
        shelves: [
            {
                shelfName: "Mystery",
                books: [
                    {
                        id: "0",
                        order: "0",
                        isbn: "9780316769480",
                        title: "The Catcher in the Rye",
                        author: "J.D. Salinger",
                        facing: "front",
                        publicationDate: "1991",
                        pageCount: "214",
                        thumbnail:
                            "https://images.isbndb.com/covers/08/85/9780316769480.jpg",
                    },
                    {
                        id: "1",
                        order: "1",
                        isbn: "9780140177398",
                        title: "One Hundred Years of Solitude",
                        author: "Gabriel Garcia Marquez",
                        facing: "front",
                        publicationDate: "1991",
                        pageCount: "448",
                        thumbnail:
                            "https://images.isbndb.com/covers/08/85/9780140177398.jpg",
                    },
                ],
                privacy: "public",
                order: "0",
            },
        ],
        following: ["User1", "User2"],
        followers: ["User1", "User2"],
        privacy: "public",
    },
]

export default usersData