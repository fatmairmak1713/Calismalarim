function showLogin() {
  document.getElementById("loginBox").classList.add("active");
  document.getElementById("registerBox").classList.remove("active");
}

function showRegister() {
  document.getElementById("registerBox").classList.add("active");
  document.getElementById("loginBox").classList.remove("active");
}

/* 👁️ ŞİFRE GÖSTER/GİZLE */
function togglePassword(id, icon) {
  let input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}

/* 📧 EMAIL KONTROL */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* 🔐 ŞİFRE KONTROL */
function validatePassword(pass) {

  let hasUpper = /[A-Z]/.test(pass);
  let hasLower = /[a-z]/.test(pass);
  let hasNumber = /[0-9]/.test(pass);

  return (
    pass.length >= 8 &&
    pass.length <= 20 &&
    hasUpper &&
    hasLower &&
    hasNumber
  );
}

/* 📝 REGISTER */
function register() {

  let email = document.getElementById("regEmail").value.trim();
  let pass = document.getElementById("regPass").value.trim();

  if (email === "" || pass === "") {
    alert("❌ Boş bırakma!");
    return;
  }

  if (!validateEmail(email)) {
    alert("❌ Geçerli bir email gir!");
    return;
  }

  if (!validatePassword(pass)) {
    alert("❌ Şifre 8-20 karakter olmalı,\n1 büyük harf,\n1 küçük harf,\n1 sayı içermeli!");
    return;
  }

  if (localStorage.getItem("user") === email) {
    alert("❌ Bu kullanıcı zaten kayıtlı!");
    return;
  }

  localStorage.setItem("user", email);
  localStorage.setItem("pass", pass);

  alert("✅ Kayıt başarılı!");
}

/* 🔑 LOGIN */
function login() {

  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();

  let u = localStorage.getItem("user");
  let p = localStorage.getItem("pass");

  if (email === "" || pass === "") {
    alert("❌ Boş bırakma!");
    return;
  }

  if (!validateEmail(email)) {
    alert("❌ Email formatı yanlış!");
    return;
  }

  if (email === u && pass === p) {

    localStorage.setItem("loggedIn", "true");

    alert("✅ Giriş başarılı!");

    window.location.href = "products.html";

  } else {
    alert("❌ Hatalı giriş!");
  }
}

/* 🔒 LOGIN KONTROL */
function checkLogin() {

  if (localStorage.getItem("loggedIn") !== "true") {

    alert("⚠️ Önce giriş yapmalısın!");

    window.location.href = "login.html";
  }
}

/* 🚪 LOGOUT */
function logout() {

  localStorage.removeItem("loggedIn");

  alert("Çıkış yapıldı 👋");

  window.location.href = "index.html";
}

/* 🛒 SEPETE EKLE */
function addToCart(name, price) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCartCount();

  alert("🛒 Sepete eklendi ✔");
}

/* 🧺 SEPET SAYISI */
function loadCartCount() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let el = document.getElementById("cartCount");

  if (el) {
    el.textContent = cart.length;
  }
}

/* 💳 SATIN AL */
function buyNow() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("❌ Sepet boş!");
    return;
  }

  alert("🎉 Ödeme başarılı!");

  localStorage.removeItem("cart");

  if (typeof loadCart === "function") {
    loadCart();
  }

  loadCartCount();
}

/* 📦 ÜRÜN DETAY SAYFASI */
function openProduct(id, price, name, img) {

  localStorage.setItem("product", JSON.stringify({
    id: id,
    price: price,
    name: name,
    img: img
  }));

  window.location.href = "product.html";
}

/* 🔠 BÜYÜK YAZI MODU */
function toggleBigText() {
  document.body.classList.toggle("big-text");
}

/* 🌍 ÇEVİRİ */
async function translateText(text) {

  let lang = localStorage.getItem("lang") || "tr";

  if (lang === "tr") return text;

  try {

    let res = await fetch(
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
      lang +
      "&dt=t&q=" +
      encodeURIComponent(text)
    );

    let data = await res.json();

    return data[0][0][0];

  } catch (err) {

    console.error(err);

    return text;
  }
}

/* 🌍 YORUMLARI ÇEVİR */
async function translateComments() {

  let comments = JSON.parse(localStorage.getItem("comments")) || [];

  let lang = localStorage.getItem("lang") || "tr";

  let newComments = [];

  for (let c of comments) {

    let translatedText =
      lang === "tr"
        ? c.text
        : await translateText(c.text);

    newComments.push({
      user: c.user,
      date: c.date,
      text: translatedText
    });
  }

  localStorage.setItem("comments", JSON.stringify(newComments));

  if (typeof loadComments === "function") {
    loadComments();
  }

  alert("🌍 Yorumlar çevrildi!");
}

/* ⌨️ ENTER İLE LOGIN */
document.addEventListener("keypress", function (e) {

  if (e.key === "Enter") {

    let emailInput = document.getElementById("email");

    if (emailInput) {
      login();
    }
  }
});

/* 🚀 SAYFA AÇILINCA */
window.onload = function () {
  loadCartCount();
};
function checkLogin(){

  let loggedIn =
    localStorage.getItem("loggedIn");

  if(loggedIn !== "true"){

    alert("❌ Bu sayfaya erişmek için giriş yapmalısın!");

    window.location.href = "login.html";
  }
}