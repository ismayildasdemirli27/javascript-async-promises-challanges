const orders = [
    { id: 1, product: "Laptop", stock: 5 },
    { id: 2, product: "Mouse", stock: 0 },
    { id: 3, product: "Keyboard", stock: 8 }
];

function processOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = orders.find((item) => item.id === orderId);

            if (!order) {
                reject("Order not found!");
            } else if (order.stock === 0) {
                reject("Product out of stock!");
            } else {
                resolve("Order processed successfully!\nProduct: " + order.product);
            }
        }, 2000);
    });
}

processOrder(1)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Order process completed!");
    });
