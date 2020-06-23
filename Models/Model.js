const fs = require("fs");
const ElectronicFactory = require("./ElectronicFactory.js");


class Model {
    static showAll(){
        let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
        let electronics = [];
        for(let i = 0; i < data.length; i++){
            let electronic = ElectronicFactory.create(data[i]);
            electronics.push(electronic);
        }

        return electronics;
    }

    static addInventory(inventoryObj){
        let inventories = Model.showAll();

        let id = 1;

        if(inventories.length > 0){
            id = inventories[inventories.length - 1].id + 1;
        }

        inventoryObj["id"] = id;
        let newInventory = ElectronicFactory.create(inventoryObj);
        inventories.push(newInventory);
        // simpan
        let data = JSON.stringify(inventories, null, 2);
        fs.writeFileSync("./data.json", data, "utf-8");

        return newInventory;
    }

    /*
    semua data array of object
    ["", "", ""]
    .splice(1, 1);
    */
}

module.exports = Model;