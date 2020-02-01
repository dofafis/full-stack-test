
import {productCard} from './product-card.component.mjs'
import {productsService} from './products.service.mjs'

let _document;

export function carouselMostPopular(document) {
    _document = document

    if(!document.getElementById('carouselMostPopular')) {
        document.body.innerHTML += `
        <h2>Mais Vendidos</h2>
        <div id="carouselMostPopular"></div>
        `
    }

    getProducts()
    setInterval(getProducts, 60000)

    if(!document.getElementById('slideLeftMP') || !document.getElementById('slideRightMP')) {
        document.getElementById('carouselMostPopular').innerHTML += `
            <button class="slideButtons" id="slideLeftMP" type="button"><img src="/assets/img/icons8-chevron-left-24.png" alt="Left Icon"></button>
            <button class="slideButtons" id="slideRightMP" type="button"><img src="/assets/img/icons8-chevron-right-24.png" alt="Right Icon"></button>
        `
    }

}

function getProducts() {
    productsService(function(products) {
        productCard(_document, products, 'carouselMostPopular')
        setSlider(_document)
    }, 'mostpopular')
}

function setSlider(document) {
    const slideRight = document.getElementById('slideRightMP')
    const slideLeft = document.getElementById('slideLeftMP')
    if(slideRight) {
        slideRight.onclick = function () {
            let carouselMostPopular = document.getElementById('carouselMostPopular')
            carouselMostPopular.scrollLeft += carouselMostPopular.offsetWidth/4
        };
    }
    if(slideLeft) {
        slideLeft.onclick = function () {
            let carouselMostPopular = document.getElementById('carouselMostPopular')
            carouselMostPopular.scrollLeft -= carouselMostPopular.offsetWidth/4
        }
    }
}