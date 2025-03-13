document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const file = params.get("file");

    if (file) {
        fetch(`blogs/${file}`)
            .then(response => response.text())
            .then(markdown => {
                document.getElementById("content").innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                document.getElementById("content").innerHTML = "記事を読み込めませんでした。";
                console.error("Error loading markdown file:", error);
            });
    } else {
        document.getElementById("content").innerHTML = "記事が指定されていません。";
    }
});
