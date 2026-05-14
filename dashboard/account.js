let oculto = false;

function toggleSaldo() {
  const saldo = document.getElementById("saldo");

  saldo.innerText = oculto ? "R$ 5.000,00" : "R$ •••••";

  oculto = !oculto;
}