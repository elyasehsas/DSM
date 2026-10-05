/* ================= CART ================= */

let cart = [];


/* ADD PRODUCT */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to your cart!");

}


/* UPDATE CART */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.textContent = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

        cartTotal.textContent = "0.00";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <span>

                    $${item.price.toFixed(2)}

                    <button
                    onclick="removeItem(${index})">

                        ✕

                    </button>

                </span>

            </div>

        `;

    });


    cartTotal.textContent =
        total.toFixed(2);

}



/* REMOVE PRODUCT */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}



/* OPEN CART */

function openCart() {

    document.getElementById("cartModal")
        .style.display = "flex";

    updateCart();

}



/* CLOSE CART */

function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";

}



/* SEARCH PRODUCTS */

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();


        if (name.includes(search)) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });

}



/* FILTER CATEGORY */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        if (
            product.dataset.category
            === category
        ) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* SHOW ALL PRODUCTS */

function showAllProducts() {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        product.style.display =
            "block";

    });


    document
        .getElementById("searchInput")
        .value = "";

}



/* EMAIL SUBSCRIBE */

function subscribe() {

    const email =
        document
        .getElementById("email")
        .value;


    if (email.trim() === "") {

        alert(
            "Please enter your email."
        );

        return;

    }


    alert(
        "Thank you for joining DSM!"
    );


    document
        .getElementById("email")
        .value = "";

}



/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Thank you! DSM checkout will be connected soon."
    );

}