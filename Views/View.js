class View {
    static showAll(inventories){
        console.log("Menampilkan Semua Data Inventory:\n");
        console.log(inventories);
    }

    static successAddInventory(inventory){
        console.log(`SUCCESS ADD INVENTORY: ${inventory.name}`)
    }

    static errorValidateInput(){
        console.log("Maaf data yang anda masukkan kurang sesuai");
    }
}

module.exports = View;