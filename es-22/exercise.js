let primitive = "hello";

switch (typeof(primitive)){
    case "number":
        console.log("type of the variable is number");
        break;
    case "string":
        console.log("type of the variable is string");
        break;
    case "boolean":
        console.log("type of the variable is boolean");
        break;
    default:
        console.log("error");
        break;
}