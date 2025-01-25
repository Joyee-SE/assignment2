const loadProduct = () =>
{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => {
                    displayProducts(data);
                });
};

const displayProducts = (products) =>
{
    const product=document.getElementById(product);
    products.forEach(product => {
        const div = document.createElement("div");
    });
}

loadProduct();