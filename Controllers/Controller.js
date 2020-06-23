const Model = require("../Models/Model.js");
const View = require("../Views/View.js");

class Controller {

    static showAll(){
        let inventories = Model.showAll();
        View.showAll(inventories);
    }

    static addInventory(data){
        if(data.length >= 3){
            let inventoryObj = {
                name: data[0],
                quantity: data[1],
                type: data[2]
            }
            let inventory = Model.addInventory(inventoryObj);
            View.successAddInventory(inventory);
        }
        else{
            View.errorValidateInput();
        }
    }

}

module.exports = Controller;