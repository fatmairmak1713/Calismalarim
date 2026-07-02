let cart = [];

/* REGISTER */
function register(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if(!email || !pass){
    alert("Boş bırakma ❌");
    return;
  }

  localStorage.setItem("user", email);
  localStorage.setItem("pass", pass);

  alert("Kayıt başarılı 🎉");
}

/* LOGIN */
function login(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let u = localStorage.getItem("user");
  let p = localStorage.getItem("pass");

  if(email === u && pass === p){
    alert("Giriş başarılı 🚀");
    window.location.href = "shop.html";
  } else {
    alert("Hatalı giriş ❌");
  }
}

/* LOGOUT */
function logout(){
  window.location.href = "index.html";
}

/* PRODUCTS */
let products = [
  {id:1,name:"Rayban",price:299},
  {id:2,name:"Lens Pro",price:199},
  {id:3,name:"Black Style",price:349},
  {id:4,name:"Blue Light",price:249}
];

function renderProducts(){
  let box = document.getElementById("products");
  box.innerHTML = "";

  products.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price}₺</p>
        <button onclick="add(${p.id})">Sepete Ekle</button>
      </div>
    `;
  });

  renderCart();
}

/* CART */
function add(id){
  let item = products.find(p=>p.id===id);
  cart.push(item);
  renderCart();
}

function remove(i){
  cart.splice(i,1);
  renderCart();
}

function renderCart(){
  let box = document.getElementById("cart");
  let total = 0;

  let html = "<h3>🛒 Sepet</h3>";

  cart.forEach((c,i)=>{
    total += c.price;

    html += `
      <p>${c.name} ${c.price}₺
      <button onclick="remove(${i})">❌</button></p>
    `;
  });

  html += `<hr>Toplam: ${total}₺`;
  html += `<br><button onclick="checkout()">💳 Satın Al</button>`;

  box.innerHTML = html;
}

function checkout(){
  if(cart.length === 0){
    alert("Sepet boş!");
    return;
  }

  alert("🎉 Satın alma başarılı!");
  cart = [];
  renderCart();
}

function toggleCart(){
  let c = document.getElementById("cart");
  c.style.display = c.style.display === "block" ? "none" : "block";
}
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "XXX",
  appId: "XXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

function register(){
  createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then(user => {
      alert("Kayıt başarılı");
    });
}