function toggleTest(el) {
  el.classList.toggle("open");
}

function openAll() {
  document.querySelectorAll(".test").forEach(t => t.classList.add("open"));
}

function closeAll() {
  document.querySelectorAll(".test").forEach(t => t.classList.remove("open"));
}
