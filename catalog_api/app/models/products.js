const Mongoose = require('mongoose')

const ProductModel = Mongoose.model("product", {
    imagesSsl: Object,
    skus: [
        {
            sku: String,
            specs: Object,
            properties: {
                name: String,
                installment:{
                    count: String,
                    price: String
                },
                images:{
                    imagem1: String,
                    default: String
                },
                price: String,
                url: String,
                details:{
                    precoavista: String
                },
                status: String,
                oldPrice: String
            },
            customBusiness: Object
        }
    ],
    apiKey: String,
    description: String,
    type: String,
    auditInfo: {
        updatedBy: String,
        updatedThrough: String
    },
    specs: Object,
    eanCode: Object,
    price: String,
    details: {
        name: String,
        brand: String,
        rating: String,
        cod_venda: String,
        precoavista: String
    },
    remoteUrl: Object,
    categories: [
        {
            id: String,
            name: String,
            parents: [Object]
        }
    ],
    id: {
        type: String,
        unique: true,
        required: true
    },
    stock: Object,
    brand: String,
    customBusiness: Object,
    basePrice: Object,
    images: {
        imagem1: String,
        default: String
    },
    kitProducts: [Object],
    created: String,
    oldPrice: String,
    published: Object,
    version: String,
    url: String,
    tags: [Object],
    unit: Object,
    installment: {
        count: Number,
        price: Number
    },
    name: String,
    clientLastUpdated: String,
    extraInfo: {
        hash: String
    },
    status: String,
    ungroupedId: String
})

module.exports = ProductModel