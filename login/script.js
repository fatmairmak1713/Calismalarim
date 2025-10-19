const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('signin');

let canClick = false;

// Butonun mouse üstüne geldiğinde kaçması
button.addEventListener('mouseenter', () => {
  if (!canClick) {
    const x = Math.random() * 200 - 100; // rastgele sağ-sol
    const y = Math.random() * 100 - 50;  // rastgele yukarı-aşağı
    button.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Kullanıcı veri girdiğinde kontrol
function checkInputs() {
  if (username.value.trim() && password.value.trim()) {
    canClick = true;
    button.style.transform = 'translate(0, 0)';
    button.style.cursor = 'pointer';
  } else {
    canClick = false;
    button.style.cursor = 'not-allowed';
  }
}

username.addEventListener('input', checkInputs);
password.addEventListener('input', checkInputs);
