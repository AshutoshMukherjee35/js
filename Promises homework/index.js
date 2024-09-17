const cart = ["Shoes", "Shades", "Jeans"]

// createOrder, proceedToPayment, showOrderSummary, updateWallet

// createOrder(cart , function(orderId) {
//     proceedToPayment(orderId , function(paymentInfo){
//         showOrderSummary(paymentInfo , function() {
//             updateWallet;
//         })
//     })
// })

createOrder(cart)
    .then(function(orderId){
        return orderId;
    })
    .then(function(orderId){
        console.log(orderId)
        return proceedToPayment(orderId)
    })
    .then(function(paymentInfo){
        console.log(paymentInfo)
        return showOrderSummary(paymentInfo)
    })
    .then(function(paymentInfo){
        console.log(paymentInfo)
        return updateWallet();
    })
    .catch(function(err){
        console.log(err.message)
    })


function createOrder(cart) {
    //1. create order
    //2. validate cart
    //3. generate order id

    return new Promise(function( resolve , reject ) {
        if(!ValidateCart(cart)) {
            const err = new Error("Cart not validated")
            reject(err)
        } else {
            const orderId = "12345"
            resolve(orderId)
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise((resolve,reject) =>
    {
        if(orderId) {
            resolve("Proceed To payment")
        } else {
            reject("Payment can't be initiated")
        }
    }
    )
}

function ValidateCart(cart) {
    return true;
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve,reject) =>
    {
        if(paymentInfo) {
            resolve("Payment Successful for order")
            
        } else {
            reject("Order summary cannot be generated due to an error")
        }
    },
    )
}
function updateWallet() {
    return new Promise(function(resolve,reject){
        resolve("Wallet balance updated")
        console.log("Updated wallet balance")
    },
    )
}