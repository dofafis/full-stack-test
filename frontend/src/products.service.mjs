export function productsService(callback) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE)
            callback(http.responseText)
    }
    http.open('GET', 'http://localhost:3001/products/recommended?rankingType=mostpopular&maxProducts=16', true);
    http.setRequestHeader('Content-Type', 'application/json')
    http.send(null);
}