const customers = [
    { email: "customer1@example.com", password: "password1" },
    { email: "customer2@example.com", password: "password2" },
    { email: "customer3@example.com", password: "password3" },
    { email: "customer4@example.com", password: "password4" },
    { email: "customer5@example.com", password: "password5" },
];

const suppliers = [
    { email: "supplier1@example.com", password: "supplierpass1" },
    { email: "supplier2@example.com", password: "supplierpass2" },
];

const products = [
    { id: 1, name: "Soap", price: 1.99, img: "data:image/jpeg;base64,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" },
    { id: 2, name: "Shampoo", price: 4.99, img: "https://example.com/images/shampoo.jpg" },
    { id: 3, name: "Toothpaste", price: 2.99, img: "https://example.com/images/toothpaste.jpg" },
    { id: 4, name: "Detergent", price: 5.99, img: "https://example.com/images/detergent.jpg" },
    { id: 5, name: "Cooking Oil", price: 6.99, img: "https://example.com/images/cooking-oil.jpg" },
    { id: 6, name: "Rice", price: 3.99, img: "https://example.com/images/rice.jpg" },
    { id: 7, name: "Flour", price: 2.49, img: "https://example.com/images/flour.jpg" },
    { id: 8, name: "Sugar", price: 1.49, img: "https://example.com/images/sugar.jpg" },
    { id: 9, name: "Tea", price: 2.99, img: "https://example.com/images/tea.jpg" },
    { id: 10, name: "Coffee", price: 3.99, img: "https://example.com/images/coffee.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (document.getElementById("productList")) {
        displayProducts();
    }

    if (document.getElementById("cart")) {
        displayCart();
    }

    if (document.getElementById("orderList")) {
        displayOrders();
    }
});

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const customer = customers.find(user => user.email === email && user.password === password);
    const supplier = suppliers.find(user => user.email === email && user.password === password);

    if (customer) {
        localStorage.setItem("user", JSON.stringify(customer));
        window.location.href = "customer.html";
    } else if (supplier) {
        localStorage.setItem("user", JSON.stringify(supplier));
        window.location.href = "supplier.html";
    } else {
        alert("Invalid credentials!");
    }
}

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.style.display = "grid";
    productList.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    productList.style.gap = "20px";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product-tile";
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}" width="100">
            <h4>${product.name}</h4>
            <p>Price: $${product.price.toFixed(2)}</p>
            <input type="number" id="quantity-${product.id}" placeholder="Quantity">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}
function addToCart(productId) {
    const quantity = document.getElementById(`quantity-${productId}`).value;
    if (quantity > 0) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity: parseInt(quantity) });
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    } else {
        alert("Please enter a valid quantity.");
    }
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartElement.appendChild(itemElement);
    });
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length > 0) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(...cart);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.removeItem("cart");
        displayCart();
        alert("Order placed successfully!");
    } else {
        alert("Your cart is empty.");
    }
}

function displayOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const orderList = document.getElementById("orderList");
    orders.forEach(order => {
        const orderElement = document.createElement("div");
        orderElement.innerHTML = `
            <h4>${order.name}</h4>
            <p>Price: $${order.price.toFixed(2)}</p>
            <p>Quantity: ${order.quantity}</p>
        `;
        orderList.appendChild(orderElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.getElementById("username").textContent = `Welcome, ${user.email}`;
    }

    updateCartCount();

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (document.getElementById("productList")) {
        displayProducts();
    }

    if (document.getElementById("cart")) {
        displayCart();
    }

    if (document.getElementById("orderList")) {
        displayOrders();
    }
});

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = `Cart: ${cart.length} items`;
}
