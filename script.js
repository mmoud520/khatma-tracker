const KHATMA_PAGES = 604;

let khatmas = Number(localStorage.getItem("khatmas")) || 0;
let pages = Number(localStorage.getItem("pages")) || 0;

function updateDisplay() {
  document.getElementById("khatmas").textContent = khatmas;
  document.getElementById("pages").textContent = pages;
  document.getElementById("remaining").textContent = Math.max(100 - khatmas, 0);
}

function addKhatma() {
  khatmas += 1;
  pages += KHATMA_PAGES;
  saveData();
  updateDisplay();
}

function addPages() {
  let input = prompt("كم صفحة قرأت؟");
  let num = Number(input);
  if (!isNaN(num) && num > 0) {
    pages += num;
    let newKhatmas = Math.floor(pages / KHATMA_PAGES);
    khatmas = newKhatmas;
    saveData();
    updateDisplay();
  } else {
    alert("يرجى إدخال رقم صحيح.");
  }
}

function saveData() {
  localStorage.setItem("khatmas", khatmas);
  localStorage.setItem("pages", pages);
}

updateDisplay();
