const Controller = require("./Controllers/Controller.js");

const command = process.argv[2];
const parameters = process.argv.slice(3);

if(command === "showAll"){
    Controller.showAll();
}
else if(command === "addInventory"){
    Controller.addInventory(parameters);
}
else if(command === "deleteInventory"){
    Controller.deleteInventory(parameters);
}
