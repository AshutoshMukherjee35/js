//Here we'll learn how to create a new promis, previously we learned how to consume 1

const cart = ["Shoes", "Pants", "Kurta"]
// const cart = []

//create order is an api that would return a promise 
// const promise = createOrder(cart)

// promise.then(function(orderId) {
//     console.log(orderId)
// })
// .catch(function(err) {
//     console.log(err.message)
// })
createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
       return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(){
        console.log("No matter what happens I will be definately called as I am after the catch block and don't have any other catch block after me.");   
    })
/*This chaining makes our code free from the callback hell.*/


//Producer
//Now we'll create a promise for the creatOrder api
function createOrder(cart) {
    const pr = new Promise(function( resolve, reject) {
        //1. create order
        //2. validate cart
        if(!ValidateCart(cart)) {
            const err = new Error("Invalid Cart");
            reject(err)
        }
        //3. generate order id and return it.
        const orderId = "12345" // DbCall.cart.orderID;
        if(orderId) {
            setTimeout(function(){
                resolve(orderId)
            }, 5000)
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve , reject) {
        resolve("Payment Successful")
    })
}

function ValidateCart(cart) {
//    return false
return true;
}

/**we can resolve a promise just once, we either resolve a promis
  or reject a promise and nothing in between.
 */