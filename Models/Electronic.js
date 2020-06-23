class Electronic {
    constructor(id, name, quantity, type){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.type = type;
    }
}

class Computer extends Electronic {
    constructor(id, name, quantity, type){
        super(id, name, quantity, type);
    }
}

class Smartphone extends Electronic {
    constructor(id, name, quantity, type){
        super(id, name, quantity, type);
    }
}

class Tablet extends Electronic {
    constructor(id, name, quantity, type){
        super(id, name, quantity, type);
    }
}

module.exports = { Computer, Smartphone, Tablet }