import homeIco from "../assets/svg/home.svg";
// import menuIco from "../assets/svg/menu.svg";
import ordersIco from "../assets/svg/orders.svg";
import historyIco from "../assets/svg/history.svg";

import coffee1 from "../assets/images/coffee1.png";
import coffee2 from "../assets/images/coffee2.jpeg";
import coffee3 from "../assets/images/coffee3.jpeg";
import coffee4 from "../assets/images/coffee4.jpeg";
import coffee5 from "../assets/images/coffee5.jpeg";
import coffee6 from "../assets/images/coffee6.png";
import coffee7 from "../assets/images/coffee7.jpeg";
import coffee8 from "../assets/images/coffee8.jpeg";
import coffee9 from "../assets/images/coffee9.jpeg";

import fruit1 from "../assets/images/fruit1.jpeg";
import fruit2 from "../assets/images/fruit2.jpeg";
import fruit3 from "../assets/images/fruit3.jpeg";
import fruit4 from "../assets/images/fruit4.jpeg";
import fruit5 from "../assets/images/fruit5.jpeg";

const menuData = [
    { id: 1, name: "Home Page", ico: homeIco, path: "/home/products" },
    // { id: 2, name: "Menu", ico: menuIco, path: "" },
    { id: 3, name: "Cart", ico: ordersIco, path: "/home/cart" },
    { id: 4, name: "History", ico: historyIco, path: "" },
];

const categoryData = [
    { id: 1, name: "coffee" },
    { id: 2, name: "fruits" }
]

const productData = [
    { id: 1, category: "coffee", name: "Americano", description: "The americano is often mistaken for just a standard black coffee, but it's so much more than that.", image: coffee1, price: 75 },
    { id: 2, category: "coffee", name: "Cortado", description: "The cortado is relatively new in the world of coffee and many get it confused with a flat white. So, what is a cortado and what makes it different?", image: coffee2, price: 35 },
    { id: 3, category: "coffee", name: "Mocha", description: "Deliciously sweet, nutty and chocolatey. Find out what is a mocha, where it came from & how it's different.", image: coffee3, price: 25 },
    { id: 4, category: "coffee", name: "Macchiato", description: "An espresso coffee drink, topped with a small amount of foamed milk to enable the espresso taste to shine through.", image: coffee4, price: 60 },
    { id: 5, category: "coffee", name: "Flat White", description: "A newcomer in the coffee world that is increasing popular. Learn exactly what a flat white is and where it came from, here.", image: coffee5, price: 42 },
    { id: 6, category: "coffee", name: "Decaf", description: "Many people like to enjoy a cup of decaf coffee as it offers the delicious taste with less caffeine content. But what is decaf coffee, exactly?", image: coffee6, price: 78 },
    { id: 7, category: "coffee", name: "Irish Coffee", description: "ou will recognise an Irish coffee as it is served in a distinctive toddy glass, with a generous layer of cream. But exactly what is it?", image: coffee7, price: 70 },
    { id: 8, category: "coffee", name: "Drip Coffee", description: "Drip coffee is one of the most popular ways to prepare and enjoy coffee, but what is it exactly and where did it come from?", image: coffee8, price: 80 },
    { id: 9, category: "coffee", name: "Instant Coffee", description: "Instant coffee is a staple in our lives. It’s quick and easy to prepare and, not to mention, delicious. But what is instant coffee? ", image: coffee9, price: 20 },
    { id: 10, category: "fruits", name: "Avacado", description: "The avocado is a medium-sized, evergreen tree in the laurel family. It is native to the Americas and was first domesticated by Mesoamerican tribes more than 5,000 years ago. Then as now it was prized for its large and unusually oily fruit.", image: fruit1, price: 200 },
    { id: 11, category: "fruits", name: "Orange", description: "An orange is a fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.", image: fruit2, price: 90 },
    { id: 12, category: "fruits", name: "Blue berry", description: "Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.", image: fruit3, price: 180 },
    { id: 13, category: "fruits", name: "Apple", description: "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.", image: fruit4, price: 160 },
    { id: 14, category: "fruits", name: "Grapes", description: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters. The cultivation of grapes began perhaps 8,000 years ago, and the fruit has been used as human food over history.", image: fruit5, price: 75 },
];

export { menuData, categoryData, productData };