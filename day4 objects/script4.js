const ShoppingCart = {
    items: [],
    addItem(item_name, item_price) {
        this.items.push({name: item_name, price: item_price});
        console.log(`Added item: ${item_name} - $${item_price}`);
    },
    removeLastItem() {
        const removed = this.items.pop();
        console.log(`Removed item: ${removed.name}`);
    },
    showTotal() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        console.log(`Total Price: $${total}`);
    }
};
ShoppingCart.addItem("Book", 12.99);
ShoppingCart.addItem("Pen", 1.50);
ShoppingCart.addItem("Notebook", 5.00);
ShoppingCart.showTotal();
ShoppingCart.removeLastItem();
ShoppingCart.showTotal();

for (let item of ShoppingCart.items) {
    console.log(`Item: ${item.name}`);
}