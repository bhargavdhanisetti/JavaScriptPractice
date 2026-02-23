function greetUser(name, callback){
    callback(name);
}

function sayHello(name){
    console.log("say Hello " + name);

}

function sayWelcome(name){
    console.log("say Welcome " + name);
}

greetUser("Alice", sayHello);
greetUser("Bob", sayWelcome);