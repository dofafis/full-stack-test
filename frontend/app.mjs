import {carousel} from './src/carousel.component.mjs'

export function app() {
    setInterval(carousel(document), 1000)
}