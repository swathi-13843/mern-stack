function placeorder() {
    console.log("Order placed successfully!");
}
function makepayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment successful!");
        }, 2000);
    });
}
function sendconfirmation() {
    console.log("Confirmation sent to the customer!");
}

async function main() {
    placeorder();
    const paymentResult = await makepayment();
    console.log(paymentResult);
    sendconfirmation();
}
main();