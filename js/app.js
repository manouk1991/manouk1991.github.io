console.log("app.js geladen");

function toggleTest(test) {
  test.classList.toggle("open");
}

function openAll() {
  document.querySelectorAll(".test").forEach(t => t.classList.add("open"));
}

function closeAll() {
  document.querySelectorAll(".test").forEach(t => t.classList.remove("open"));
}
/* ===== Naar boven ===== */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===== Weergave-toggle (radio-gedrag) ===== */
function setView(button, mode) {
  document.querySelectorAll(".toggle-btn")
    .forEach(b => b.classList.remove("active"));

  button.classList.add("active");

  if (mode === "expanded") {
    openAll();
  } else {
    closeAll();
  }
}

/* ===== Open alleen laag / hoog ===== */
function openSection(button, sectionClass) {
  const test = button.closest(".test");

  // test openen
  test.classList.add("open");

  // alles dicht binnen deze test
  test.querySelectorAll(".test-content").forEach(c => {
    c.style.display = "none";
  });

  // juiste sectie tonen
  const section = test.querySelector(`.test-content.${sectionClass}`);
  if (section) {
    section.style.display = "block";
  }
}

