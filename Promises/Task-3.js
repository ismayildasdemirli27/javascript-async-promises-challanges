const orders = [
    {
        id: 101,
        product: "Laptop",
        price: 1200,
        available: true
    },
    {
        id: 102,
        product: "Mouse",
        price: 25,
        available: false
    },
    {
        id: 103,
        product: "Monitor",
        price: 300,
        available: true
    }
];

let userBalance = 1500;

const paidOrders = [];

function checkOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paidOrders.includes(orderId)) {
                reject("This order has already been paid!");
                return;
            }

            const order = orders.find((item) => item.id === orderId);

            if (!order) {
                reject("Order not found!");
            } else if (!order.available) {
                reject("Product is not available!");
            } else {
                resolve(order);
            }
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userBalance < order.price) {
                reject("Insufficient balance!");
            } else {
                userBalance = userBalance - order.price;
                paidOrders.push(order.id);
                resolve(order);
            }
        }, 2000);
    });
}

function generateReceipt(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const receipt = {
                orderId: order.id,
                product: order.product,
                amount: order.price,
                status: "Paid"
            };
            resolve(receipt);
        }, 1000);
    });
}

async function completePurchase(orderId) {
    try {
        console.log("Checking order...\n");
        const order = await checkOrder(orderId);

        console.log("Order verified!");
        console.log("Product: " + order.product + "\n");

        console.log("Processing payment...\n");
        await processPayment(order);

        console.log("Payment successful!");
        console.log("Amount paid: $" + order.price + "\n");

        console.log("Generating receipt...\n");
        const receipt = await generateReceipt(order);

        console.log("Receipt generated!");
        console.log("Order ID: " + receipt.orderId);
        console.log("Product: " + receipt.product);
        console.log("Amount: $" + receipt.amount);
        console.log("Status: " + receipt.status + "\n");

        console.log("Remaining balance: $" + userBalance + "\n");
    } catch (error) {
        console.log("Error: " + error + "\n");
    } finally {
        console.log("Payment process finished!");
    }
}

completePurchase(101);
