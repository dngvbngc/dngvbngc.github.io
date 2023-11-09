document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("homebutton").onclick = function () {
        location.href = "index.html";
    };

    document.getElementById("requestbutton").onclick = function () {
        location.href = "request.html";
    };

    document.getElementById("newbutton").onclick = function () {
        location.href = "new.html";
    };

    document.getElementById("aboutmebutton").onclick = function () {
        location.href = "aboutme.html";
    };
})