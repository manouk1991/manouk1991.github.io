function toggle(button) {
    const content = button.nextElementSibling;
    content.style.display =
        content.style.display === "block" ? "none" : "block";
}

function expandAll() {
    document.querySelectorAll('.test-content').forEach(el => {
        el.style.display = 'block';
    });
}

function collapseAll() {
    document.querySelectorAll('.test-content').forEach(el => {
        el.style.display = 'none';
    });
}

