document.getElementById("editor").addEventListener("input", function() {
    document.getElementById("log").value += "input event fired\n";
}, false);
