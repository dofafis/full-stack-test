
import {productCard} from './product-card.component.mjs'
import {productsService} from './products.service.mjs'

let _document;

export function carouselPriceReduction(document) {
    _document = document

    if(!document.getElementById('carouselPriceReduction')) {
        document.body.innerHTML += `
        <h2>Produtos que baixaram de preço</h2>
        <div id="carouselPriceReduction"></div>
        `
    }

    getProducts()
    setInterval(getProducts, 60000)

    if(!document.getElementById('slideLeftPR') || !document.getElementById('slideRightPR')){
        document.getElementById('carouselPriceReduction').innerHTML += `
            <button class="slideButtons" id="slideLeftPR" type="button"><img src="/assets/img/icons8-chevron-left-24.png" alt="Left Icon"></button>
            <button class="slideButtons" id="slideRightPR" type="button"><img src="/assets/img/icons8-chevron-right-24.png" alt="Right Icon"></button>
        `
    }
}

function getProducts() {
    productsService(function(products) {
        productCard(_document, products, 'carouselPriceReduction')
        setSlider(_document)
    }, 'pricereduction')
}

function setSlider(document) {
    const slideRight = document.getElementById('slideRightPR')
    const slideLeft = document.getElementById('slideLeftPR')
    if(slideRight) {
        slideRight.onclick = function () {
            let carouselPriceReduction = document.getElementById('carouselPriceReduction')
            carouselPriceReduction.scrollLeft += carouselPriceReduction.offsetWidth/4
        };
    }
    if(slideLeft) {
        slideLeft.onclick = function () {
            let carouselPriceReduction = document.getElementById('carouselPriceReduction')
            carouselPriceReduction.scrollLeft -= carouselPriceReduction.offsetWidth/4
        }
    }
}