const templateBegin = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Chapter 1</title>
    <link rel="stylesheet" href="style.css">
    <script src="nav.js" defer></script>
</head>

<body>

    <article>
        <h1 class="chapter-title">Chapter 1</h1>

        <div class="chapter-content">`
        
        
const templateEnd = `</div>
    </article>

    <div class="nav-bar">
        <button onclick="goPrev()">◀ Previous</button>
        <button onclick="goList()">List</button>
        <button onclick="goNext()">Next ▶</button>
    </div>

</body>

</html>`

function convert() {
    const text = document.getElementById("input").value;

    const html = text
        .split(/\n\s*\n/) // split on empty lines
        .map(p => p.trim())
        .filter(p => p.length > 0)
        .map(p => `<p>${p}</p>`)
        .join("\n\n");

    document.getElementById("output").textContent = html;
}

function copyOutput() {
    const output = document.getElementById("output").textContent;
    navigator.clipboard.writeText(output);
}

function clearAll() {
    document.getElementById("input").value = "";
    document.getElementById("output").textContent = "";
}

function convertToHtml() {
    const text = document.getElementById("input").value;

    const html = text
        .split(/\n\s*\n/) // split on empty lines
        .map(p => p.trim())
        .filter(p => p.length > 0)
        .map(p => `<p>${p}</p>`)
        .join("\n\n");

    document.getElementById("output").textContent = templateBegin + html + templateEnd;
}