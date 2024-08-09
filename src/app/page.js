import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import ShowBooks from "@/components/ShowBooks";

async function getDate() {
    const req = await fetch(
        "https://online-json-server-api.up.railway.app/project/66b5a4e0340dd55056fb66ff/books",
        {
            next: {
                revalidate: 0,
            },
        }
    );
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
