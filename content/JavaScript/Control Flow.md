JavaScript supports many types of control flow statements that are essential for guiding the logic of a program.

## Block statements
A block statement, delimited by curly braces, is used to group statements.

```js
{
	statement1;
	statement2;
	// ...
	statementN;
}
```

## Labelled statement
A label allows to refer a statement with an identifier. The value of the label can be any valid JavaScript identifier.

```js
label:
	statement;
```

## Conditional statements
A conditional statement is used to execute a set of statements if a specified condition evaluates `true`. JavaScript supports two types of conditional statements: `if...else` and `switch`.

In an `if...else` statement, the `else` clause is optional, and multiple conditions can be tested in a sequence using `else if` syntax. In the case of multiple conditions, only the first logical condition which evaluates to `true` will be executed. 

```js
if (condition1) {
	statement1;
}
else if (condition2) {
	statement2;
}
else {
	statement3;
}
```

In a `switch` statement, the program transfers control to the first `case` label which is matched with the specified expression's value. If no match is found, the control is transferred to the optional `default` clause.

```js
switch (expression) {
	case label1:
		statement1;
		break;
	case label2:
		statement2;
		break;
	default:
		statement3;
}
```

However, it should be noted that if the optional `break` statement is omitted, the program will execute statements under the next `case` and so on, regardless of whether their labels match with the expression's value.

## Falsy values
The following values evaluates to `false` and are called falsy values. All other values, including objects, evaluate to `true`.
- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `""`

```js
const b = new Boolean(false);
if (b) {
	// evaluates to true because b is an object
}
```

## Exception handling
Exceptions are thrown using the `throw` statement and handled using the `try...catch` statements.

If any statement within a `try` block throws an exception, the control is immediately transferred to the `catch` block. The optional `finally` block is executed regardless of whether an exception was thrown. The `finally` block is executed right after the `try...catch` statement is finished executing.

```js
openFile();
try {
	readFile(); // this may throw an exception
}
catch (e) {
	handleError(e);
}
finally {
	closeFile(); // gracefully release the resources
}
```

It should be noted that almost any object can be thrown as an exception. Although it is common to through strings and numbers as errors, it is often more effective to use an exception type specifically designed for these purposes.

```js
throw "Hello, World!";
throw 42;
throw true;
throw {
	a: 42
}
```

An error object is the proper object to be used as an exception. An error object has a name (such as `DOMException` or `Error`) and a message. For general purpose, the `Error` constructor can be used so that the program does not discriminate between custom exceptions and system exceptions.

```js
throw new Error("The message");
```
