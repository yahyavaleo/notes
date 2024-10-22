A function is a block of code that can be invoked arbitrarily many times to exhibit some well-defined behavior. In JavaScript, functions are also objects. However, functions are different from regular objects in that they are callable.

Functions are first-class objects because functions are treated like any other variable. A function can be passed as an argument to another function, can be returned by another function, and can be assigned as a value to a variable.

## Defining functions
A function can be defined using any of these three syntax:
- function declaration
- function expression
- arrow function expression

A function declaration consists of the `function` keyword, the name of the function, a list of parameters to the function, and the function body enclosed in curly braces. A function declaration actually creates a hoisted variable from the function name and assigns a function object to it.

```js
function square(number) {
	 return number * number;
}
```

A function expression is syntactically very similar to the function declaration, except that the function name is optional. If the name is omitted, the function is anonymous. However, providing a name allows the function to refer to itself, which can be useful for recursion.

```js
// anonymous function expression
const square = function (number) {
	return number * number;
};

// named function expression
const factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
};
```

An arrow function expression is a compact alternative to a function expression that does not use the `function` keyword. Under certain situations, arrow functions allow an even more compact syntax. Arrow functions are always anonymous.

```js
const toInch = (cm) => { return cm * 0.3937; };
toInch(5); // => 1.9685

// if the body contains a single return statement
const toInch = (cm) => cm * 0.3937;

// if there is exactly one parameter
const toInch = cm => cm * 0.3937;
```

However, an arrow function does not have its own binding to `this`, instead it inherits its value from the environment in which it is defined. Moreover, an arrow function does not have a prototype and can not use `yield`, so it can not be used as a constructor or a generator function.

## Invoking functions
A regular function is invoked by using the `()` operator with the function name. If the function expects arguments, these arguments should be provided as a comma-separated list inside the `()` operator. The return value of the function becomes the value of the invocation expression.

```js
function print(msg) { console.log(msg); }
print("Hello, World!"); // => undefined: logs "Hello, World!"

function sum(x, y) { return x + y; }
sum(42, 37); // => 79
```

A function can also be invoked using the conditional invocation syntax `f?.()`. It executes the function only if the function is not `null` or `undefined`, otherwise, it simply evaluates to `undefined` instead of throwing an error.

```js
let f = undefined;
f();   // => TypeError
f?.(); // => undefined
```

A function invocation can use the spread syntax to unpack its arguments. This is particularly useful when passing multiple arguments to a function without explicitly defining them. It is also commonly used together with the rest parameter syntax.

```js
function scale(multiplier, ...args) { // ...args is rest parameter syntax
	return args.map(e => multiplier * e);
}

let arr = [1, 2, 3, 4];
scale(2, ...arr); // => [2, 4, 6, 8]: ...arr is spread syntax
```

A function can be invoked as soon as it is defined, in which case, it is called an immediately invoked function expression. An IIFE is useful when a function needs to run only once but should not pollute the global namespace. An IIFE contains two parts:
- A function expression enclosed within the grouping operator `()`.
- A call operator `()` immediately after the enclosed function expression.

```js
// named IIFE
(function () { console.log("Hello, World!"); })(); // => "Hello, World"

// anonymous IIFE
(function welcome() { console.log("Welcome!"); })(); // => "Welcome"
```

## Function parameters
When a function is invoked with a list of argument values, those values are assigned to the parameters declared in the function definition from left-to-right. There are, however, two special kinds of parameter syntax: default parameters and rest parameters.

If a function is invoked with fewer arguments than the declared parameters, the default behavior is to initialize the remaining parameters with `undefined`. However, default parameters allow a different default value to be specified.

```js
// the default behavior initializes param2 with undefined
function f(param1, param2) { console.log(`${param1}, ${param2}`); }
f(42); // => 42, undefined

// param2 is a default parameter with 37 as default value
function f(param1, param2 = 37) { console.log(`${param1}, ${param2}`); }
f(42); // => 42, 37
```

The rest parameters allow to write functions that can be invoked with arbitrarily more arguments than parameters. The arguments are first assigned to the non-rest parameters, and then the remaining arguments are stored in an array that becomes the value of the rest parameter.

```js
function f(a, b, ...restParam) { console.log(restParam); }
f(1, 2, 3, 4, 5); // => [3, 4, 5]
```

Parameters can also the destructuring syntax to unpack values from an array or properties from an object passed as an argument.

```js
function distance([x1, y1], [x2, y2]) {
	return Math.hypot((x2-x1, y2-y1));
}
distance([3, 7], [15, 42]); // => 35
```

Arguments are always passed by value and never passed by reference. However, when the argument is itself a reference (such as when it is an object), the value being passed is a copy of the reference, but it still points to the same underlying object. This is called pass by sharing.

```js
function f(param) { param = 0; }
let arg = 42;
f(arg);
console.log(arg); // => 42: original variable remains unchanged

function f(param) { param.x = 0; }
let arg = { x: 42 };
f(arg);
console.log(arg.x); // => 0: original object is changed

function f(param) { param = { x: 0 }; }
let arg = { x: 42 };
f(arg);
console.log(arg.x); // => 42: original object is unchanged
```

## Function scope
A scope is the current execution context in which variables can be accessed. A function creates its own scope so that a variable defined locally within the function can not be accessed from outside the function. Scopes are layered in hierarchy so that child scopes have access to parent scopes.

```js
let scope = "global";
(function outer() {
	let scope = "local";
	console.log(scope); // => "local"
	(function nested() {
		let scope = "nested";
		console.log(scope); // => "nested"
	})()
})()
```

## Callback functions
A callback function is a function passed to another function as an argument. The caller then invokes the callback function in either of the two ways:
- Synchronous callback is called immediately with no intervening asynchronous tasks.
- Asynchronous callback is called after an asynchronous operation has completed.

```js
function sync_caller (callback) {
	console.log("Caller invoked");
	callback();
	console.log("Caller returned");
}

function async_caller(callback) {
	console.log("Caller invoked");
	setTimeout(() => { callback() }, 1000);
	console.log("Caller returned");
}

function cb() {
	console.log("Callback executed");
}

sync_caller(cb);  // => Caller invoked -> Callback executed -> Caller returned
async_caller(cb); // => Caller invoked -> Caller returned   -> Callback executed
```

## Closures
JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when the function was defined, instead of the variable scope that is in effect when they are invoked.

In order to implement lexical scoping, the internal state of a function must include a reference to its surrounding state in addition to the function object. This combination of a function and the lexical environment within which that function was declared is called a closure.

```js
let scope = "global";
function checkscope() {
	let scope = "local";
	function f() { return scope; }
	return f;
}
f = checkscope(); // f = () => { return scope; }
f(); // => "local": this happens because f forms a closure with the local scope
```

Each invocation of the outer function creates a new lexical environment, that is independent of the lexical environments used by previous invocations. However, the nested functions share the same lexical environment because the closures they form hold reference to the same lexical environment.

```js
function counter() {
	let n = 0;
	return {
		count: function() { return n++; },
		reset: function() { n = 0; }
	};
}
let c = counter();
let d = counter();

// c and d count independently
c.count(); // => 0: n = 1
d.count(); // => 0: n = 1

// count() and reset() share the same lexical environemnt
c.count(); // => 1: n = 2
c.reset(); // n = 0

// because c and d have independent lexical environments
c.count(); // => 0: n = 1
d.count(); // => 1: n = 2
```

## Functional programming
Functional programming is a declarative programming paradigm where programs are written as a sequence of functions. Functions are treated as first-class objects, that is, they can be bound to names, passed as arguments, and returned from other functions, just as any other data type can.

Functional programming is contrasted with object-oriented programming, which focuses on self-contained entities that consist of both data and methods that operate on that data. Functional programming involves these core concepts: pure functions, higher-order functions, and recursion.

A pure function is a function that takes at least one argument and always return something. It does not cause side effects, change global variables, or mutate the global state. A pure function treats its arguments as immutable data, and therefore works on its copies rather than the original objects.

A higher-order function is a function that can either take other functions as arguments or returns functions as return value. Higher-order functions are possible when functions are first-class objects.

A recursive function invokes itself, allowing an operation to be repeated until it reaches a base case. Recursion is possible when a function is a named entity. In function programming, iteration is usually accomplished through recursion.
