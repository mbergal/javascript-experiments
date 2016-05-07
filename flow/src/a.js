// @flow

type SomeFunc = (n:number) => SomeFunc;

var a : SomeFunc = function(n:number) { return a; };

a(22)(333)('a')

