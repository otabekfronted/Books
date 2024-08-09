"use client";

function ShowBooks({ books }) {
    return (
        <div>
            {books.map((book) => {
                return (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default ShowBooks;
