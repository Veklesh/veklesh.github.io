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


// function goPrev() {
//     if (idx > 0) window.location.href = chapters[idx - 1];
// }


function goNext() {
    if (idx < chapters.length - 1) window.location.href = chapters[idx + 1];
}

function goPrev() {
    console.log("test");
    // Get current filename (e.g., "chapter159.html")
    const filename = window.location.pathname.split("/").pop();

    // Extract chapter number
    const match = filename.match(/chapter(\d{3})\.html/i);
    const current = parseInt(match[1], 10);

    const prev = String(current - 1).padStart(3, "0");
    window.location.href = `chapter${prev}.html`;
}

function goNext() {
    console.log("test");
    // Get current filename (e.g., "chapter159.html")
    const filename = window.location.pathname.split("/").pop();

    // Extract chapter number
    const match = filename.match(/chapter(\d{3})\.html/i);
    const current = parseInt(match[1], 10);

    const next = String(current + 1).padStart(3, "0");
    window.location.href = `chapter${next}.html`;
}