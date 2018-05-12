let soundsMap = require('./soundsMap.js');

function showSymbol(key) {
    let symbol = document.getElementById("symbol");
    symbol.innerHTML = key;
}

document.addEventListener('DOMContentLoaded', function() {
    showSymbol("?");
}, false);


document.onkeydown = function(e) {
    let key = soundsMap[e.keyCode] || "?";

    if (key !== "?") {
        document.getElementById(key).play();
    }

    showSymbol(key);
};
