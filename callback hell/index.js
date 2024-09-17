cart = ["shoes", "jacket", "sweater"]

api.getOrder(cart , function() {
    api.getPayment(function() {
        api.getPaymentStatus(function() {
            api.showOrderSummary()
        })
    })
})

//This is callback hell also known as pyramid of doom.
/*It leads to inversion of control which is when we are
giving the callback function as paramters we are
somewhere dependent on the parameter taking function
for the execution of our callback function. Hence
causing an inversion of control. */