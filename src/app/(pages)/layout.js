import Navbar from "@/components/Navbar";

function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default layout;
