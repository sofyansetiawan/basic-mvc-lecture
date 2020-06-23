const { Computer, Smartphone, Tablet } = require("./Electronic.js");

class ElectronicFactory {
    static create(electronic){
        if(electronic.type === "computer"){
            return new Computer(electronic.id, electronic.name, electronic.quantity, electronic.type);
        }
        else if(electronic.type === "smartphone"){
            return new Smartphone(electronic.id, electronic.name, electronic.quantity, electronic.type);
        }
        else if(electronic.type === "tablet"){
            return new Tablet(electronic.id, electronic.name, electronic.quantity, electronic.type);
        }
    }
}

module.exports = ElectronicFactory;