function filterAndCapitalizeBooks(books) {
    const currentYear = new Date().getFullYear();
    const filteredBooks = books.filter(book => book.publishYear >= 2010);
    
    const booksWithCapitalizedAuthors = filteredBooks.map(book => ({
        title: book.title,
        author: book.author.charAt(0).toUpperCase() + book.author.slice(1),
        publishYear: book.publishYear,
    }));
    
    return booksWithCapitalizedAuthors;
}

const books = [
    { title: 'Making India Awesome', author: 'Chetan Bhagat', publishYear: 2001 },

    { title: 'Glimpses of World History ', author: 'Jawaharlal Nehru', publishYear: 1945 },

    { title: 'Guide ', author: 'R.K. Narayan', publishYear: 2011 },

    { title: 'It is Always Possible ', author: 'Kiran Bedi', publishYear: 2015 },

    { title: 'Past Forward ', author: 'G.R. Narayanan', publishYear: 2020 },

    { title: 'The Way of the Wizard ', author: 'Deepak Chopra', publishYear: 2007 },
]

const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);

// Print the filtered and capitalized books
filteredAndCapitalizedBooks.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publishYear}`);
});
