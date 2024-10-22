An expression is a code fragment that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate. Complex expressions are joined by operators.

 JavaScript has both unary and binary operators, and one ternary operator called the conditional operator. All binary operators are infix, because the operator is placed between the two operands. A unary operator has two forms, depending on whether it is applied before or after the operand:
- Prefix unary operator, such as `++x`
- Postfix unary operator, such as `x++`

The precedence of operators determine the order in which they are applied when evaluating an expression. You can override operator precedence by using parenthesis.

## Assignment Operators
An assignment operator (`=`) assigns the value of its right operand to its left operand. There are also compound assignment operators, such as `+=` and `&=`, that are shorthand for a binary operation applied to the operands before assigning the result to the left operand.

```js
// simple assignment
let x = 5; // x = 5

// compound assignment
x += 6; // x = 11
```

## Comparison Operators
A comparison operator compares its operands and returns a logical value depending on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering.

If the two operands are not of the same type, JavaScript attempts to convert the operands to compatible types. The only exception to this conversion involves the strict equality operator (`===`) which checks if both the operands are equal and have the same type, and its counterpart, the strict inequality operator (`!==`).

```js
const a = 3;
const b = 4;

a == b;  // false
a != b;  // true
a === b; // false
a !== b; // true
a > b;   // false
a >= b;  // false
a < b;   // true
a <= b;  // true
```

## Arithmetic Operators
An arithmetic operator takes two operands and returns a single numerical value. Besides the standard arithmetic operators (`+`, `-`, `*`, and `/`), JavaScript provides the remainder (`%`), increment (`++`), decrement (`--`), unary negation (`-`), unary plus (`+`), and exponentiation (`**`) operator.

```js
let a = 42;
let b = 4;

a % b;  // 2
a++;    // 42
++a;    // 43
a--;    // 42
--a;    // 41
-a;     // -42
+a;     // 42
a ** b; // 3111696
```

## Bitwise Operators
A bitwise operator treats its operand as a set of 32 bit integers. However, after performing operation on the binary representations, a bitwise operator return standard numerical values.

A bitwise shift operator shifts the left operands by the number of bit positions specified by the right operand. The direction of the shift is controlled by the operand used.

```js
const a = 15;
const b = 9;

a & b; // =>   9 (1111 & 1001 = 1001)
a | b; // =>  15 (1111 & 1001 = 1111)
a ^ b; // =>   6 (1111 ^ 1001 = 0110)
~a;    // => -16 (~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000)

const a = 9;
const b = 2;

a << b;  // => 36 (1001 << 2 = 100100)
a >> b;  // =>  2 (1001 >> 2 = 10)
a >>> b; // =>  2 (1001 >> 2 = 10)
```

## Logical Operators
A logical operator is typically used with Boolean values, in which case, it returns a Boolean value. However, the logical operators actually return the value of one of its operand. As such, they are more correctly called value selection operators.

The value selection is described according to these rules:
- Logical AND (`expr1 && expr2`) returns `expr1` if it is falsy, otherwise returns `expr2`.
- Logical OR (`expr1 || expr2`) returns `expr1` if it is truthy, otherwise returns `expr2`.
- Logical NOT (`!expr`) returns `true` if `expr` is falsy, otherwise returns `false`.
- Nullish coalescing (`expr1 ?? expr2`) returns `expr1` if it is neither `null` nor `undefined`, otherwise returns `expr2`.

The nullish coalescing operator (`??`) provides an easy way to set the first defined value from a list. It is a better alternative than `||` for setting default values when `0` and `""` are considered valid values, but `null` and `undefined` are not.

```js
true && false; // false
"cat" && "dog"; // "dog"

true || false; // true
"cat" || "dog"; // "cat"

!false; // true
!"cat"; // false

null ?? 42; // 42
false ?? 7; // false
```

As logical expressions are evaluated from left to right, they are tested for possible short-circuit evaluation (which means that the `anything` part is not evaluated in such cases) using these rules:
- `falsy && anything` is short-circuit evaluated to the falsy value.
- `truthy || anything` is short-circuit evaluated to truthy value.
- `nonNullush ?? anything` is short-circuit evaluated to the non-nullish value.

## String Operators
In addition to the comparison operator, which can be used on string values, the concatenation operator (`+`) concatenates two string values together, returning another string that is the union of the two operand strings.

```js
"my " + "string"; // "my string"
```

## Conditional Operator
The conditional operator evaluates to one of its operand depending on the condition. If the `condition` is true, the operator evaluates to `expr1`, otherwise it evaluates to `expr2`.

```js
const age = 24;
age >= 18 ? "adult" : "minor"; // "adult"
```

## Comma Operator
The comma operator evaluates both of its operands and returns the value of its last operand. This operand is primarily used inside a `for` loop, to allow multiple variables to be updated at each iteration. It is considered bad practice to use it anywhere else.

```js
for (let i = 0, j = 9; i <= j; i++, j--) {
	// do something
}
```

## Unary Operators
A unary operator is an operator that takes only one operand. JavaScript has the following unary operators, in addition to the unary plus (`+`), unary negation (`-`), bitwise NOT (`~`), and logical NOT (`!`) operators:
- The `delete` operator deletes an object's property, then returns `true` or `false` depending on whether the operation was successful.
- The `typeof` operator returns a string indicating the type of the unevaluated operand.
- The `void` operator evaluates the given expression and then returns `undefined`.

```js
const obj = { key: "value" };
delete obj.key; // true
delete Math.PI; // false (can not delete non-configurable properties)

const f = new Function("5 + 2");
const num = 42;
const bool = true;
const str = "Hello, World!";
const arr = ["Apple", "Mango", "Orange"];
const date = new Date();

typeof f;    // "function"
typeof num;  // "number"
typeof bool; // "boolean"
typeof str;  // "string"
typeof arr;  // "object"
typeof date; // "object"
typeof xyz;  // "undefined"
typeof null; // "object"

// Logs "Hello, World!" to the screen
// Assigns undefined to output
const output = void console.log("Hello, World!");
```

## Relational Operators
A relational operator compares its operands and returns a Boolean value based on whether the comparison is true. JavaScript has the following relational operators:
- The `in` operator returns `true` if the specified property is in the specified object.
- The `instanceof` operator returns `true` if the specified object is of the specified object type.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
const obj = { key: "value"};

3 in trees;        // true
6 in trees;        // false
"length" in trees; // true
"key" in obj;      // true

const date = new Date(1995, 12, 17);
date instanceof Date; // true
```

## Basic Expressions
A basic expression is the simplest of an expression. All operators eventually operate on one or more basic expressions. Besides identifiers and literals, basic expressions include:
- The `this` keyword refers to the current object.
- The grouping operator `()` controls the precedence of evaluation in expressions.
- The property accessor syntax gets property values on objects, using either dot or bracket notation.
- The optional chaining syntax (`?.`) performs chained operation on an object if it is defined and not `null`, otherwise it short-circuits the operation and returns `undefined`.
- The `new` operator creates a new instance of an object.
- The `super` keyword is used to call functions on an object's parents.

```js
class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
		this.meal = { water: 42, popcorns: 7 };
	}

	think() {
		let answer = (1 + 2) * 3;
		return answer;
	}
}

const dog = new Dog("Charlie", "Bulldog");
dog.think();      // 9
dog.name;         // "Charlie"
dog["name"];      // "Charlie"
dog.meal?.water;  // 42
dog.meal?.fruits; // undefined
```
