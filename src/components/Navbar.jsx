import Link from "next/link";

function Navbar() {
    return (
        <div className="max-w-5xl mx-auto px-5 flex justify-between items-center py-4">
            <h1 className="text-3xl">Logo</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;
