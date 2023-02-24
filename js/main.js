const totalUah = document.getElementById("totalUah");
const euroAmount = document.getElementById("euroAmount");
const exchangeRateEuro = document.getElementById("exchangeRateEuro");

const totalEuro = document.getElementById("totalEuro");
const uahAmount = document.getElementById("uahAmount");
const exchangeRateUah = document.getElementById("exchangeRateUah");

function renderTotalUah() {
  totalUah.innerHTML = calculateEurToUah(
    euroAmount.value,
    exchangeRateEuro.value
  );
}

function renderTotalEuro() {
  totalEuro.innerHTML = calculateUahToEur(
    uahAmount.value,
    exchangeRateUah.value
  ).toFixed(2);
}
