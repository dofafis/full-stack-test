
import {productCard} from './product-card.component.mjs'
import {productsService} from './products.service.mjs'

export function carousel(document) {
    
    document.body.innerHTML = `
        <div id="carousel"></div>
    `
    productsService(function(products) {
        productCard(document, products)
        setSlider(document)
    })

    document.getElementById('carousel').innerHTML += `
        <button class="slideButtons" id="slideLeft" type="button"><img src="/assets/img/icons8-chevron-left-24.png" alt="Left Icon"></button>
        <button class="slideButtons" id="slideRight" type="button"><img src="/assets/img/icons8-chevron-right-24.png" alt="Right Icon"></button>
    `

}

function setSlider(document) {
    const slideRight = document.getElementById('slideRight')
    const slideLeft = document.getElementById('slideLeft')
    slideRight.onclick = function () {
        let carousel = document.getElementById('carousel')
        carousel.scrollLeft += carousel.offsetWidth/4
    };
    
    slideLeft.onclick = function () {
        let carousel = document.getElementById('carousel')
        carousel.scrollLeft -= carousel.offsetWidth/4
    }
}