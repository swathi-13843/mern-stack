//callback function
function greet(name,callback){
    callback();
    console.log(`Hello, ${name}!`);
}
greet('Alice', () => {
    console.log('This is a callback function.');
});


