function goList() {
    window.location.href = "index.html";
}


// Configure your chapter order here
const chapters = [
    "chapter1.html",
    "chapter2.html"
    // Add more chapters as you create them
];


// Determine current chapter index
const current = window.location.pathname.split("/").pop();
const idx = chapters.indexOf(current);


function goPrev() {
    if (idx > 0) window.location.href = chapters[idx - 1];
}


function goNext() {
    if (idx < chapters.length - 1) window.location.href = chapters[idx + 1];
}