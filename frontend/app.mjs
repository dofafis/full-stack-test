import {carouselMostPopular} from './src/carousel-mostpopular.component.mjs'
import {carouselPriceReduction} from './src/carousel-pricereduction.component.mjs'

export function app() {
    startCarousels()
}

function startCarousels() {
    carouselMostPopular(document)
    carouselPriceReduction(document)
}