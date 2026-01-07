function toggleTest(button) {
    const content = button.parentElement.nextElementSibling;
    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    button.textContent = isOpen ? "▼" : "▲";
}

function setView(mode) {
    const contents = document.querySelectorAll(".test-content");
    const toggles = document.querySelectorAll(".toggle");

    contents.forEach((content, index) => {
        if (mode === "full") {
            content.style.display = "block";
            toggles[index].textContent = "▲";
        } else {
            content.style.display = "none";
            toggles[index].textContent = "▼";
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
