var products = [
  { id: 1, name: "bag", price: "12300" },
  { id: 2, name: "tablet", price: "12000" },
  { id: 3, name: "mobile", price: "20000" },
  { id: 4, name: "laptop", price: "32000" },
  { id: 5, name: "keyboard", price: "31000" },
  { id: 6, name: "mouse", price: "55000" },
];
var userBasket = [
  { id: 1, name: "bag", price: "12300" },
  { id: 2, name: "tablet", price: "12000" },
  { id: 3, name: "mobile", price: "20000" },
];

var SelectUser = prompt(
  "please enter your in your basket \n 1- add products \n 2- remove products "
);
if (SelectUser === "1") {
  var productNameUser = prompt("please enter your product in your basket!");
  var dataProduct;
  var IsinBasket = products.some(function (product) {
    if (product.name === productNameUser) {
      dataProduct = product;
      return true;
    }
    return product.name === productNameUser;
  });
  if (IsinBasket === true) {
    var newProduct = {
      id: 4,
      name: dataProduct.name,
      price: dataProduct.price,
    };
    userBasket.push(newProduct);
    console.log("Basket:", userBasket);
  } else {
    console.log("not found product");
  }
  console.log("success");
} else if (SelectUser === "2") {
  var productNameUser = prompt("please enter your product in your basket!");
  var productIndex = userBasket.findIndex(function (product) {
    return product.name === productNameUser;
  });
  userBasket.splice(productIndex, 1);
  console.log("Basket:", userBasket);
} else {
  console.log("error");
}
