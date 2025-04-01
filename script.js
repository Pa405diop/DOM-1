document.addEventListener("DOMContentLoaded", function () {
    // Sélection de tous les boutons plus et moins
    let plusButtons = document.querySelectorAll(".fa-plus-circle");
    let minusButtons = document.querySelectorAll(".fa-minus-circle");
    let deleteButtons = document.querySelectorAll(".delete");
    let heartIcons = document.querySelectorAll(".fa-heart");
    
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".list-products .card-body").forEach(product => {
            let quantity = parseInt(product.querySelector(".quantity").textContent);
            let unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
            total += quantity * unitPrice;
        });
        document.getElementById("Total").textContent = total/2 + " $";
    }

    plusButtons.forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".card-body");
            let quantitySpan = product.querySelector(".quantity");
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            
            let unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
            product.querySelector(".total").textContent = quantity * unitPrice;
            
            updateTotalPrice();
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".card-body");
            let quantitySpan = product.querySelector(".quantity");
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                
                let unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
                product.querySelector(".total").textContent = quantity * unitPrice;
                
                updateTotalPrice();
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".card-body");
            product.remove();
            updateTotalPrice();
        });
    });

    heartIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            this.classList.toggle("text-danger"); // Change la couleur en rouge pour indiquer un favori
        });
    });
});
