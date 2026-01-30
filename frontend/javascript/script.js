// Real-world example: Shopping Cart

// This is our shopping cart (empty array to start)
let shoppingCart = [];

// Function to add item to cart
function addToCart() {
    let items = ["Laptop", "Mouse", "Keyboard", "Monitor"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    shoppingCart.push(randomItem);
    console.log("Added:", randomItem);
    console.log("Cart now has:", shoppingCart);
}

// Function to show cart on the webpage
function showCart() {
    let display = document.getElementById("cart-display");
    if (shoppingCart.length === 0) {
        display.innerHTML = "Your cart is empty!";
    } else {
        display.innerHTML = "Your Cart: " + shoppingCart.join(", ");
    }
    console.log("Cart contents:", shoppingCart);
}

// Function to clear cart
function clearCart() {
    shoppingCart = [];
    document.getElementById("cart-display").innerHTML = "Cart cleared!";
    console.log("Cart cleared!");
}

// Understanding Functions Better

// Function that takes input (parameters)
function greet(name) {
    return "Hello, " + name + "!";
}

// Using the function
let greeting1 = greet("Pavan");
let greeting2 = greet("World");
console.log(greeting1);
console.log(greeting2);

// Function that does calculation
function calculateTotal(price, quantity) {
    let total = price * quantity;
    return total;
}

let laptopTotal = calculateTotal(999, 2);  // 2 laptops at $999 each
console.log("Total for laptops: $" + laptopTotal);

// Function with default value
function applyDiscount(price, discount = 10) {
    let discountAmount = price * (discount / 100);
    return price - discountAmount;
}

let originalPrice = 100;
let finalPrice = applyDiscount(originalPrice);
console.log("Original: $" + originalPrice);
console.log("After 10% discount: $" + finalPrice);

// Objects - storing related data together

// Creating an object (like a product in a store)
let product = {
    name: "Laptop",
    price: 999,
    brand: "Dell",
    inStock: true
};

console.log("Product name:", product.name);
console.log("Product price: $" + product.price);
console.log("Is in stock?", product.inStock);

// Accessing object properties (two ways)
console.log("Brand:", product.brand);        // Dot notation
console.log("Brand:", product["brand"]);     // Bracket notation

// Updating object properties
product.price = 899;  // Price dropped!
console.log("New price: $" + product.price);

// Adding new property
product.color = "Silver";
console.log("Product color:", product.color);

// Object with functions (methods) - using different name
let cart = {
    items: [],
    addItem: function(item) {
        this.items.push(item);
        console.log("Added:", item);
    },
    getTotal: function() {
        return this.items.length;
    }
};

cart.addItem("Laptop");
cart.addItem("Mouse");
console.log("Total items:", cart.getTotal());



// Conditional Statements - Making Decisions

let age = 25;
let hasLicense = true;

// Simple if statement
if (age >= 18) {
    console.log("You are an adult");
}

// if-else statement
if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote yet");
}

// Multiple conditions (if-else if-else)
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Logical operators (AND, OR, NOT)
if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive");
}

// OR operator
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}

// NOT operator
let isRaining = false;
if (!isRaining) {
    console.log("Let's go outside!");
}

// Ternary operator (short if-else)
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);



// Loops - Repeating Code

// For loop - when you know how many times to repeat
console.log("=== For Loop ===");
for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}

// Loop through an array
let fruits = ["apple", "banana", "orange", "grape"];
console.log("=== Looping through fruits ===");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ":", fruits[i]);
}

// For...of loop (easier way to loop arrays)
console.log("=== For...of Loop ===");
for (let fruit of fruits) {
    console.log("I like", fruit);
}

// While loop - repeats while condition is true
console.log("=== While Loop ===");
let count = 0;
while (count < 3) {
    console.log("While count:", count);
    count++;  // Increase count by 1
}

// ForEach - array method (very common in React!)
console.log("=== ForEach ===");
fruits.forEach(function(fruit, index) {
    console.log(index + 1, fruit);
});

// Map - creates new array (VERY important for React!)
console.log("=== Map ===");
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase fruits:", upperCaseFruits);




// ES6+ Features - Modern JavaScript (Used a lot in React!)

// Arrow Functions - Shorter way to write functions
console.log("=== Arrow Functions ===");

// Old way (regular function)
function addOld(a, b) {
    return a + b;
}

// New way (arrow function)
const addNew = (a, b) => {
    return a + b;
}

// Even shorter (if only one line)
const multiply = (a, b) => a * b;

console.log("Add (old):", addOld(5, 3));
console.log("Add (new):", addNew(5, 3));
console.log("Multiply:", multiply(4, 2));

// Arrow functions with arrays (very common in React!)
let numbers = [1, 2, 3, 4, 5];

// Using arrow function with map
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Using arrow function with filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Template Literals - Better way to write strings
console.log("=== Template Literals ===");
let userName = "Pavan";
let userAge = 25;

// Old way (concatenation)
let messageOld = "Hello, " + userName + "! You are " + userAge + " years old.";

// New way (template literals - use backticks `)
let messageNew = `Hello, ${userName}! You are ${userAge} years old.`;

console.log("Old way:", messageOld);
console.log("New way:", messageNew);

// Destructuring - Extract values from arrays/objects
console.log("=== Destructuring ===");

// Array destructuring
let colors = ["red", "green", "blue"];
let [firstColor, secondColor, thirdColor] = colors;
console.log("First color:", firstColor);
console.log("Second color:", secondColor);

// Object destructuring
let person = {
    name: "Pavan",
    age: 25,
    city: "New York"
};

let { name, age, city } = person;
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);