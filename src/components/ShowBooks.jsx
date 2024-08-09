"use client";

function ShowBooks({ books = [] }) {
    return (
        <div className="flex flex-wrap gap-4">
            {books.data.map((book) => (
                <div
                    key={book.id}
                    className="p-4 border border-gray-300 rounded-lg shadow-md w-60"
                >
                    <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                    <p className="text-gray-600">{book.author}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowBooks;
