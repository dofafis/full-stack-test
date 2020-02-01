export function productCard(document, products, carouselId) {
    let carousel = document.getElementById(carouselId)
    let productCards = ""

    products.forEach(product => {
        let image = product.images ? product.images.default : (product.skus ? ( product.skus[0] ? product.skus[0].properties.images.default: '') : '')
        let description = product.description
        let price = product.price
        let installment = product.installment
        let oldPrice = product.oldPrice

        if(image && description && price && installment && oldPrice) {
            description = description.length > 50 ? description.slice(0,50) + '...' : description
            price = parseFloat(price).toFixed(2)
            oldPrice = parseFloat(oldPrice).toFixed(2)
            installment.price = parseFloat(installment.price).toFixed(2)
            productCards += `<div id="product-card">
                <img src='https:${image}' />
                <p class="description">${description}</p>
                <p class="oldPrice">R$ ${oldPrice}</p>
                <span class="por">Por </span><span class="price">R$ ${price}</span>
                <p class="installment">${installment.count}x R$ ${installment.price}</p>
            </div>`
        }
    })
    carousel.innerHTML = productCards + carousel.innerHTML

}