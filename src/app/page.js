import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import ShowBooks from "@/components/ShowBooks";

async function getDate() {
    const req = await fetch("http://localhost:4000/books", {
        next: {
            revalidate: 0,
        },
    });
    const data = await req.json();
    return data;
}

async function Home() {
    const books = await getDate();

    return (
        <>
            <Navbar />
            <div>
                <Form />
                <ShowBooks books={books} />
            </div>
        </>
    );
}

export default Home;
