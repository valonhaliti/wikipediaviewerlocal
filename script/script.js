function fadeIn(el) {
    el.style.opacity = 0;

    let tick = function() {
        el.style.opacity = +el.style.opacity + 0.02;

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

document.addEventListener("DOMContentLoaded", function() {
    // document is ready


    document.getElementById('getForm').addEventListener('submit', getWikipediaArticles);

    function getWikipediaArticles() {
        alert(document.getElementById('search-field').value);
    }

    let el = document.getElementById("search-results");

    fadeIn(el);












});