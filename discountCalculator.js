function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger; // Inspect before loop starts

    for (let i = 0; i < quantity; i++) { // Fixed: start from 0
        totalPrice += pricePerItem;
        debugger; // Inspect inside the loop
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // Apply 10% discount
        debugger; // Inspect after applying discount
    }

    return totalPrice;
}


module.exports = calculateDiscountedPrice;