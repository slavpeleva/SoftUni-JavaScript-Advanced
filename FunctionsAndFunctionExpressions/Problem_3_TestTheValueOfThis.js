function testContext() {
    console.log(this);
}
//console.log(this);
//testContext();

var test = new testContext();
console.log(test);