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
    { id: 1, name: "Garbage Bags", price: 20.00 },
    { id: 2, name: "Drawstring Bags", price: 17.00 },
    { id: 3, name: "Environmental Garbage Bags", price: 17.50 },
    { id: 4, name: "Lavender Scented Bags", price: 7.80 },
    { id: 5, name: "Wave Top Garbage Bags", price: 5.75 },
];

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
           
            <h4>${product.name}</h4>
            <p>Price: AED${product.price.toFixed(2)}</p>
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
            <p>Price: AED${item.price.toFixed(2)}</p>
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
            <p>Price: AED${order.price.toFixed(2)}</p>
            <p>Quantity: ${order.quantity}</p>
        `;
        orderList.appendChild(orderElement);
    });
}


function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(document.getElementById("cart-count")){
        document.getElementById("cart-count").textContent = `Cart: ${cart.length} items`;
    }

}

function generateInvoice() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const invoiceElement = document.getElementById("invoice");
    let totalAmount = 0;

    orders.forEach(order => {
        const orderElement = document.createElement("div");
        orderElement.className = "card mb-3";
        orderElement.innerHTML = `
            <div class="card-body">
                <h4 class="card-title">${order.name}</h4>
                <p class="card-text">Price: $${order.price.toFixed(2)}</p>
                <p class="card-text">Quantity: ${order.quantity}</p>
                <p class="card-text">Total: $${(order.price * order.quantity).toFixed(2)}</p>
            </div>
        `;
        totalAmount += order.price * order.quantity;
        invoiceElement.appendChild(orderElement);
    });

    const totalElement = document.createElement("div");
    totalElement.className = "card mt-3";
    totalElement.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">Total Amount: $${totalAmount.toFixed(2)}</h4>
        </div>
    `;
    invoiceElement.appendChild(totalElement);
}

// Call the function to generate the invoice when the page loads
document.addEventListener("DOMContentLoaded", generateInvoice);
