JavaScript is case-sensitive and uses the Unicode character set. Statements are separated by semicolons. A semicolon is not necessary after a statement if it is written on its own line. But if more than one statements are desired on a single line, then they must be separated by semicolons.

## Comments
JavaScript supports both single line and multiple line comments.

```js
// single line comment

/* multiple
   line
   comment */
```

## Identifiers
Identifiers start with either a letter, an underscore (`_`), or a dollar sign (`$`). Subsequent characters can include digits (`0`-`9`). As such, the following identifiers are legal:
- `Number_hits`
- `temp99`
- `$credit`
- `_name`

## Declarations
In a statement like `let x = 42`, the `let x` part is called a declaration, and the `x = 42` part is called an initializer. There are three kinds of variable declarations:
- `var`: Declares a variable, optionally initializing it to a value.
- `let`: Declares a block-scoped, local variable, optionally initializing it to a value.
- `const`: Declares a block-scoped, read-only named constant.

If a variable is accessed without prior declaration, JavaScript throws a `ReferenceError`. If a variable is declared without an initializer, it is assigned the value `undefined`.

## Variable Scope
A variable may belong to one of the following scopes:
- Global scope: The default scope for all code running in script mode.
- Module scope: The scope used for code running in module mode.
- Function scope: The scope created with a function.
- Block scope: The scope created with a pair of curly braces (a block).

A global variable is created by declaring a variable outside of any function. A local variable is created by declaring a variable within a function. A block-scoped variable is created by declaring a variable using `let` or `const` within a block. Variables declared with `var` are not block-scoped, but only local to the function that the block resides in.

```js
if (true) {
	var x = 5; // this is not block-scoped
}
if (true) {
	let y = 6; // this is block-scoped
}
console.log(x); // x is 5
console.log(y); // ReferenceError
```

## Variable Hoisting
Variables declared with `var` are hoisted to the top of its function or global scope. This means that such a variable can be referenced anywhere in its scope, even before its declaration. However, if you access a variable before it is declared, the value is always `undefined`, because only its declaration and default initialization (with `undefined`) is hoisted, but not its value assignment.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
	console.log(x); // undefined;
	var x = "local variable";
})();
```

Because of hoisting, all `var` statements in a function should be placed near the top of the function. This best practice increases clarity of the code.

Variables declared with `let` or `const` are in a temporal dead zone from the start of the block until the declaration is processed. Therefore, accessing such a variable before its declaration always results in a `ReferenceError`.

Unlike `var` declarations, which only hoists the declaration but not its value, function declarations are hoisted entirely. This means that you can safely call the function anywhere in its scope.

## Global Variables
Global variables are in fact properties of the global object. In web pages, the global object is the `window`, so you can read and set global variables using the `window.variable` syntax. In all environments, the `globalThis` variable (which itself is a global variable) may be used to read and set global variables.

Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the `window` or `frame` name. For example, if a variable called `phoneNumber` is declared in a document, you can refer to this variable from an `iframe` as `parent.phoneNumber`.

## Constants
A constant can not change value through re-assignment or be re-declared, and it must be initialized to a value. However, constants only prevent re-assignments, but does not prevent mutations. Therefore, the properties of objects assigned to constants, and the contents of an array, are not protected.

```js
const PI = 3.14;
PI = 7.5; // TypeError: Assignment to constant variable

function f() {}
const f = 5; // SyntaxError: Identifier 'f' has already been declared

const OBJ = {key: "value"};
OBJ.key = "otherValue"; // This is allowed

const ARR = ["HTML", "CSS"];
ARR.push("JS"); // This is allowed
```
