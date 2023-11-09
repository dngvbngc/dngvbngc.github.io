document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        let request = document.getElementById("userRequest").value;
        document.getElementById("successAlert").style.display = ""
    })
})