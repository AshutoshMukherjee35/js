const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function(orderID) {
    proceedToPayment(orderID, function(){
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        })
        })
    })

createOrder(cart)
.then(function(orderID){
   return proceedToPayment(orderID)
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
   return updateWalletBalance(paymentInfo)
})

createOrder(cart)
.then(orderID => proceedToPayment(orderID))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo))


// const promise = createOrder(cart);
// //{ data: undefined }

// promise.then(function(orderID) {
//     proceedToPayment(orderID);
// })

const api = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

const dataUSA = fetch(api);

// console.log(dataUSA)
dataUSA.then(data => console.log(data))