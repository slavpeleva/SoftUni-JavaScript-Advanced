String.prototype.startsWith = function startsWith(substring) {
    var stringStart = this.substr(0,substring.length);
    return substring == stringStart;
}

String.prototype.endsWith = function endsWith(substring){
    var stringEnd = this.substr(this.length-substring.length);
    return substring == stringEnd;
}

String.prototype.left = function left (count){
    if (count > this.length){
        return this.toString();
    }
    else{
        return this.substr(0,count);
    }
}

String.prototype.right = function right(count){
    if(count> this.length){
        return this.toString();
    }
    else{
        return this.substr(this.length-count);
    }
}


//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.startsWith("This"));
//console.log(example.startsWith("this"));
//console.log(example.startsWith("other"));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.endsWith("poses."));
//console.log(example.endsWith ("example"));
//console.log(example.startsWith("something else"));


//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.left(9));
//console.log(example.left(90));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));
