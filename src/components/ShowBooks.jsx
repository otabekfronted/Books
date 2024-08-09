"use client";

// `books` o'zgaruvchisi massiv ekanligini tekshirish uchun
function ShowBooks({ books = [] }) {
    return (
        <div>
            {books.data.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default ShowBooks;
