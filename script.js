document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
});
