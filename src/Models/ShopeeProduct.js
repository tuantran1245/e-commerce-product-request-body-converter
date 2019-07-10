import {Model} from 'vue-mc';

class ShopeeRequestBody extends Model {
     default() {
        return {
            name: '',
            description: '', // JSON OBJECT.product.description
            images: [], // JSON OBJECT.product.images
            category: '', // JSON OBJECT.product.subcategories
            subCategories:[], // JSON OBJECT.product.new_subcategories
            brand: '', // JSON OBJECT.product.attributes.values attr_id = 13047
            warranty: '', // JSON OBJECT.product.attributes.values attr_id = 20074
            tierVariation: [ // JSON OBJECT.product.tier_variation
                {
                    name: '',
                    images: [],
                    options: [],
                }
            ],
            itemModels: [ // JSON OBJECT.product.itemmodels
                {
                    name: '',
                    price: '',
                    stock: '',
                    skuCode: '',
                }
            ],
            weight: '', // JSON OBJECT.product.weight
            dimensions: { // JSON OBJECT.product.dimensions
                width: '',
                length: '',
                height: '',
            },

        }
     }
}
