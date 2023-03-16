function sayHelloName(callback){
    console.log("Hello");
    callback();
}

function printName(){
    let name = "Hasan";
    console.log(name);
}

sayHelloName(printName);