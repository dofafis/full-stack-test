export function productsService(callback, rankingType) {
    let http = new XMLHttpRequest();
    http.addEventListener("loadend", () => {
        if (http.readyState == XMLHttpRequest.DONE)
            callback(JSON.parse(http.responseText.toString('utf8')))
    })
    http.addEventListener("error", () => {
        console.log('Error')
    });

    http.open('GET', 'http://localhost:3001/products/recommended?rankingType=' + rankingType + '&maxProducts=16', true);
    http.setRequestHeader('Content-Type', 'application/json')
    http.send(null);
}