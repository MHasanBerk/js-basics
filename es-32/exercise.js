function sayHelloName(callback){
    setTimeout(function(){
        console.log("Hello");
        callback();
    },1000);
}

function printName(){
    let name = "Hasan";
    console.log(name);
}

sayHelloName(printName);