document.addEventListener("DOMContentLoaded", function() {
    // document is ready

    document.getElementById('getForm').addEventListener('submit', getWikipediaArticles);
    function getWikipediaArticles(e) {
        e.preventDefault();
        let el = document.getElementById("search-results");
        fadeIn(el);
    }




});

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



