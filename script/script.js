document.addEventListener("DOMContentLoaded", function() {
    // document is ready

    document.getElementById('getForm').addEventListener('submit', getWikipediaArticles);
    
    function getWikipediaArticles(e) {
        e.preventDefault();
        let el = document.getElementById("search-results");
        const xhr = new XMLHttpRequest();
        const link = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='
            + encodeURIComponent(document.getElementById('search-field').value) +'&format=json';

        xhr.open('GET', link, true);
        xhr.onload = function () {
            if (this.status === 200) {
                const users = JSON.parse(this.responseText).query.search;
                let output = "";
                for (let i in users) {
                    output += '<div class="article">'
                            + '<h3><a href="http://en.wikipedia.org/?curid=' + users[i].pageid+'">'+
                                users[i].title +'</a></h3>';
                    output += "<p>" + users[i].snippet +"</p></div>";

                }
                document.getElementById('search-results').innerHTML = output;
            }
        };
        fadeIn(el);
        xhr.send();
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
