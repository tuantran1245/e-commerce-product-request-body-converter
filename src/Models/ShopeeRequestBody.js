import {Model} from 'vue-mc';

class ShopeeRequestBody extends Model {
     default() {
        return {
            name: '',
            description: '',
            category: '',
            brand: '',
            model: '',
            internalMemory: '',
            network: '',
            simSlot: '',
            waterResistant: '',
            screenSize: '',
            os: '',
            ram: '',
            backCamera: '',
            frontCamera: '',
            GPS: '',
            bluetooth: '',
            microUSB: '',
            battery: '',
            color: '',
            warranty: '',
            productTypeGroup1 : [],
            productTypeGroup2 : [],
            productTypeList: [],
            images: [],
            weight: '',
            dimensions: {
                width: "",
                length: "",
                height: ""
            },

        }
     }
}
