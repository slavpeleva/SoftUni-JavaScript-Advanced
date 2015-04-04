function printArgsInfo() {
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i] instanceof Array ? "array": typeof arguments[i];
        console.log(arguments[i] + " (" + obj+ ")" );

    }
}
//printArgsInfo.call();
//printArgsInfo.call(null, undefined, "", 0, [], {});
printArgsInfo.apply();
printArgsInfo.apply(null,[null, undefined, "", 0, [], {}]);