document.addEventListener("DOMContentLoaded", function () {
    let btnsPlus = document.querySelectorAll(".fa-plus-circle");
    let btnsMoins = document.querySelectorAll(".fa-minus-circle");
    let heart=document.querySelectorAll(".fa-heart");
    let trash=document.querySelectorAll(".fa-trash-alt");
    let Delete=document.querySelectorAll(".delete");
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".list-products .card-body").forEach(product => {
            let quantity = parseInt(product.querySelector(".quantity").textContent);
            let unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
            total += quantity * unitPrice;
        });
        document.getElementById("Total").textContent = total/2 + " $";
    }


    btnsPlus.forEach((btnPlus) => {//foreach permet de parcourir les éléments du tableau btnsPlus 
        btnPlus.addEventListener("click", function () {
            let parent = btnPlus.closest(".card-body ");
            let qty = parent.querySelector(".quantity");
            let tot = parent.querySelector(".total");
            let unitPrice = parseInt(parent.querySelector(".unit-price").textContent.trim().replace("$", ""));
            
            let quantity = parseInt(qty.textContent);
            quantity++;
            qty.textContent = quantity;
            tot.textContent = quantity * unitPrice;
            updateTotalPrice()
        });
    });

    btnsMoins.forEach((btnMoins) => {
        btnMoins.addEventListener("click", function () {
            let parent = btnMoins.closest(".card-body");
            let qty = parent.querySelector(".quantity");
            let tot = parent.querySelector(".total");
            let unitPrice = parseInt(parent.querySelector(".unit-price").textContent.trim().replace("$", ""));
            
            let quantity = parseInt(qty.textContent);
            if (quantity > 0) {
                quantity--;
                qty.textContent = quantity;
                tot.textContent = quantity * unitPrice;
                updateTotalPrice()
            }
        });
    });

    heart.forEach((heart) => {
        heart.addEventListener("click",function(){
            heart.style.color = heart.style.color === "gray" ? "red" : "gray";
        });
    });

    trash.forEach((trash) => {
        trash.addEventListener("click",function(){
            let parent = trash.closest(".card-body");
            let qty = parent.querySelector(".quantity");
            let tot = parent.querySelector(".total");
            let unitPrice = parseInt(parent.querySelector(".unit-price").textContent.trim().replace("$", ""));
            
            let quantity = parseInt(qty.textContent);
            if (quantity > 0) {
                qty.textContent = 0;
                tot.textContent = 0;
                updateTotalPrice()
            }
        });
    });
    Delete.forEach((Delete)=>{
        Delete.addEventListener("click",function(){
            let parent = Delete.closest(".card-body");
            parent.parentElement.remove();
        });
    });
});
