const Mobile ={
    Brand :"samsung",
    Model :"s23",
    Price : 70000,
    showDetails(){
        console.log(`Brand: ${this.Brand}, Model: ${this.Model}, Price: $${this.Price}`);
    },
    applyDiscount(discount){
        this.Price -= (this.Price * discount / 100);
        console.log(`New Price after discount: $${this.Price}`);
    },
    isExpensive(){
        if(this.Price > 50000){
            console.log("The mobile is expensive.");
        } else {
            console.log("The mobile is affordable.");
        }
    }
};

Mobile.showDetails();
Mobile.applyDiscount(10);
Mobile.showDetails();
Mobile.isExpensive();