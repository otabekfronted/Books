"use client";

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const author = formData.get("author");

        fetch(
            "https://online-json-server-api.up.railway.app/project/66b5a4e0340dd55056fb66ff/books",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, author }),
            }
        ).then(() => console.log("success"));
    };

    return (
        <div>
            <form className="w-96" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border border-cyan-700 border-xl py-1 rounded pl-2"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="border border-cyan-700 border-xl py-1 rounded pl-2"
                    />
                </div>
                <div className="mt-5">
                    <button
                        className="px-4 py-2 mb-5 border bg-emerald-600 text-white 
                    rounded hover:bg-emerald-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
