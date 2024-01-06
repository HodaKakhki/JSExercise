basketUsers = [
  { id: 1, name: "coat", price: "20" },
  { id: 2, name: "pans", price: "2000" },
  { id: 3, name: "trouser", price: "40" },
  { id: 4, name: "dress", price: "320" },
  { id: 5, name: "skirt", price: "11" },
  { id: 6, name: "Tshirt", price: "250" },
];

var selectedbyUser = prompt('please enter a product in your basket:');
var productData;
if (selectedbyUser > "100") {
    var baskets = basketUsers.filter(function (basketUser) {
        return basketUser.price > 100
    })
    console.log(baskets);
} 
 else {
    console.log('please enter another product to your basket');
}
var postCost = baskets.length * 1000
console.log(postCost);
console.log("filtered products", baskets);
var sum = 0;
basketUsers.forEach(basketUser => {
    sum = sum + parseFloat(basketUser.price); 
});
var totalPrice = sum + postCost
console.log('total price', totalPrice);