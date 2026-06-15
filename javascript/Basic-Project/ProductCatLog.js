const ProductCatLog = {
    products: [
        {
            id: 1,
            name: "Laptop",
            price: 999.99,
            description: "A high-performance laptop for work and play."
        },
        {
            id: 2,
            name: "Smartphone",
            price: 499.99,
            description: "A sleek smartphone with a powerful camera."
        },
        {
            id: 3,
            name: "Headphones",
            price: 199.99,
            description: "Noise-cancelling headphones for immersive sound."
        }
    ],

    // getProductById(id) {
    //     return this.products.find(product => product.id === id);
    // }       
}
    
const getProductById = (id) => {
        return ProductCatLog.products.find(product => product.id === id);
    };
console.log(getProductById(2));