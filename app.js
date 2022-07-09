const calculation = (productId, price) => {
  document.getElementById(productId).innerText = price;
  getValues();
  finalTotal();
};
const getValues = () => {
  const basePrice = document.getElementById("base-price").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const totalCost =
    parseFloat(basePrice) +
    parseFloat(memoryCost) +
    parseFloat(storageCost) +
    parseFloat(deliveryCost);
  return (document.getElementById("total-price").innerText = totalCost);
};

const finalTotal = () => {
  document.getElementById("final-total").innerText = getValues();
};

const defaultMemory = document.getElementById("default-memory");
defaultMemory.addEventListener("click", function () {
  calculation("memory-cost", 0);
});
const extraMemory = document.getElementById("extra-memory");
extraMemory.addEventListener("click", function () {
  calculation("memory-cost", 100);
});

const defaultStorage = document.getElementById("default-storage");
defaultStorage.addEventListener("click", function () {
  calculation("storage-cost", 0);
});

const add512Storage = document.getElementById("extra-512-storage");
add512Storage.addEventListener("click", function () {
  calculation("storage-cost", 100);
});

const add1TStorage = document.getElementById("extra-1t-storage");
add1TStorage.addEventListener("click", function () {
  calculation("storage-cost", 180);
});

const freeDelivery = document.getElementById("free-delivery");
freeDelivery.addEventListener("click", function () {
  calculation("delivery-ost", 0);
});
const chargeDelivery = document.getElementById("charge-delivery");
chargeDelivery.addEventListener("click", function () {
  calculation("delivery-cost", 20);
});

const promoBtn = document.getElementById("promo-btn");
promoBtn.addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode != "stevekaku") {
    alert("Your promo code is not valid");
  } else if (promoCode == "stevekaku") {
    const grandTotal = document.getElementById("final-total");
    const totalValue = grandTotal.innerText;
    const discount = parseFloat(totalValue) * 0.2;
    const discountPrice = parseFloat(totalValue) - discount;
    grandTotal.innerText = parseInt(discountPrice);
  }
});
