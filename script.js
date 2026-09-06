
// ======================================
// PRODUCT INFORMATION
// ======================================

const productPrice = 4499;

let quantity = 1;

let cartCount = 0;


// ======================================
// GET HTML ELEMENTS
// ======================================

const productImage =
    document.getElementById("productImage");

const selectedColor =
    document.getElementById("selectedColor");

const quantityDisplay =
    document.getElementById("quantity");

const totalPrice =
    document.getElementById("totalPrice");

const cartDisplay =
    document.getElementById("cartCount");

const message =
    document.getElementById("message");

const plusBtn =
    document.getElementById("plusBtn");

const minusBtn =
    document.getElementById("minusBtn");

const cartBtn =
    document.getElementById("cartBtn");

const buyBtn =
    document.getElementById("buyBtn");


// ======================================
// UPDATE TOTAL PRICE
// ======================================

function updatePrice() {

    quantityDisplay.textContent = quantity;

    const total =
        productPrice * quantity;

    totalPrice.textContent =
        "৳" + total.toLocaleString();

}


// ======================================
// PLUS BUTTON
// ======================================

plusBtn.addEventListener("click", function () {

    quantity++;

    updatePrice();

});


// ======================================
// MINUS BUTTON
// ======================================

minusBtn.addEventListener("click", function () {

    if (quantity > 1) {

        quantity--;

        updatePrice();

    }

});


// ======================================
// COLOR SELECTION
// ======================================

const colorButtons =
    document.querySelectorAll(".color");


colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        // Remove active from all buttons

        colorButtons.forEach(function (item) {

            item.classList.remove("active");

        });


        // Add active to clicked button

        button.classList.add("active");


        // Get selected color

        const color =
            button.getAttribute("data-color");


        // Show color name

        selectedColor.textContent =
            color;


        // ==================================
        // CHANGE ACTUAL PRODUCT IMAGE
        // ==================================

        if (color === "Black") {

            productImage.src =
                "images/black.png";

        }


        else if (color === "White") {

            productImage.src =
                "images/white.jpg";

        }


        else if (color === "Blue") {

            productImage.src =
                "images/blue.jpg";

        }

    });

});


// ======================================
// ADD TO CART
// ======================================

cartBtn.addEventListener("click", function () {


    // Add selected quantity

    cartCount += quantity;


    // Update cart number

    cartDisplay.textContent =
        cartCount;


    // Show confirmation

    message.style.display =
        "block";


    message.textContent =
        quantity +
        " SonicPro X1 headphone(s) added to your cart!";


    // Hide message after 3 seconds

    setTimeout(function () {

        message.style.display =
            "none";

    }, 3000);

});


// ======================================
// BUY NOW
// ======================================

buyBtn.addEventListener("click", function () {

    const total =
        productPrice * quantity;


    message.style.display =
        "block";


    message.textContent =
        "Order ready! Total: ৳" +
        total.toLocaleString();

});


// ======================================
// FAQ
// ======================================

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {


        const answer =
            question.nextElementSibling;


        answer.classList.toggle("show");


        const icon =
            question.querySelector("b");


        if (
            answer.classList.contains("show")
        ) {

            icon.textContent = "−";

        }

        else {

            icon.textContent = "+";

        }

    });

});


// ======================================
// INITIAL PRICE
// ======================================

updatePrice();

