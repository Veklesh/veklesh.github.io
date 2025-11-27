// Single text conversion
function convertText() {
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


// Bind buttons
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("convertBtn").onclick = convertText;
    document.getElementById("copyBtn").onclick = copyOutput;
    document.getElementById("clearBtn").onclick = clearAll;
    document.getElementById("batchBtn").onclick = batchConvert;
});


// Batch convert .txt → .html
async function batchConvert() {
    const files = document.getElementById("fileInput").files;
    if (!files.length) return alert("Please select at least one .txt file.");


    for (const file of files) {
        const text = await file.text();


        const html = text
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(p => p.length > 0)
            .map(p => `<p>${p}</p>`)
            .join("\n\n");


        const wrapped = `<!DOCTYPE html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\" />
<title>${file.name.replace(".txt", "")}</title>
<link rel=\"stylesheet\" href=\"style.css\" />
<script src="nav.js" defer></script>
</head>
<body>
    <div class="nav-bar">
        <button onclick="goPrev()">◀ Previous</button>
        <button onclick="goList()">List</button>
        <button onclick="goNext()">Next ▶</button>
    </div>
<div class=\"chapter-content\">
${html}
</div>
</body>
</html>`;


        const blob = new Blob([wrapped], { type: "text/html" });
        const url = URL.createObjectURL(blob);


        const a = document.createElement("a");
        a.href = url;
        a.download = file.name.replace(".txt", ".html");
        a.click();


        URL.revokeObjectURL(url);
    }


    alert("All files converted successfully.");
}