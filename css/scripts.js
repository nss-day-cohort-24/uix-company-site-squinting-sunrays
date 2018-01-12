var products = [
    {name: "Honey App", description: "An app that helps you track honey and activity levels.", price: "$50", image: "images/honeyapp.jpg" },
    {name: "Honey Bit", description: "Activity and honey tracker", price: "$200", image: "images/honeybit.jpg"},
    {name: "Honey Gummies", description: "Healthy and delicious honey bear vitamins", price: "$100", image: "images/honeygummy.jpg" },
    {name: "Honey Pills", description: "Weight loss honey pills", price: "$45", image: "images/honeypills.jpg"},
    {name: "Honey Tea", description: "Soothing tea made from honey" , price: "$5" , image: "images/honeytea.jpg"},
    {name: "Honey", description: "Straight up honey", price: "$100", image: "images/honey.jpg"},
    {name: "Dope Kicks", description: "Supportive and cool exercise shoes", price: "$2000", image: "images/poohsneakers.jpg"},
    {name: "Honey Scale", description: "Honey-colored scale", price: "$80", image: "images/yellowscale.jpg"}
];
   
var productHtml = "";
for (i = 0; i < products.length; i++) { 
    productHtml += `<div>`;
    productHtml += `<img src="${products[i].image}"/>`;
    productHtml += `<h2>${products[i].name}</h2>`;
    productHtml += `<h4>${products[i].description}</h4>`;
    productHtml += `<h4>${products[i].price}</h4>`;
    productHtml += `</div>`;
}
document.getElementById("card").innerHTML = productHtml;


 