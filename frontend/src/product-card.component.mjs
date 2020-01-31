export function productCard(document, products) {
    let carousel = document.getElementById('carousel')
    let productCards = ""
    products = JSON.parse(products.toString('utf-8'))

    products.forEach(product => {
        console.log(product)
        productCards += `<div id="product-card">
            <img src='https:${product.images.default}' />
        </div>`
    })
    carousel.innerHTML = productCards + carousel.innerHTML

}