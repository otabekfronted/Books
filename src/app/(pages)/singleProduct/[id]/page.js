const getData = async (id) => {
    const req = await fetch("https://dummyjson.com/products/" + id);
    const data = await req.json();

    return { data };
};

async function SingleProduct({ params }) {
    const { data } = await getData(params.id);
    return <div>{data.title} </div>;
}

export default SingleProduct;
