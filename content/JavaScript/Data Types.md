JavaScript defines eight data types, which can be categorized into two groups: primitive and non-primitive. A primitive data type is immutable, whereas a non-primitive data type is mutable.

There are seven primitive data types:
- `Boolean`: `true` and `false`.
- `null`: A special keyword denoting the null value.
- `undefined`: A top-level property whose value is not defined.
- `Number`: An integer or floating point number, such as `42` or `3.14159`.
- `BigInt`: An integer with arbitrary precision, such as `9007199254740992n`.
- `String`: A sequence of characters that represent a text value, such as `"Hello, World!"`.
- `Symbol`: A data type whose instances are unique and immutable.

There is only one non-primitive data type: `Object`, which can store key-value pairs. Arrays and functions are special kinds of objects. While functions are technically an object, you can think of objects as named containers for values, and functions as procedures.

## Type Conversion
JavaScript is a dynamically-typed language. This means that you do not have to specify the data type of a variable when you declare it. It also means that data types are converted as needed during script execution.

```js
let my_variable = 42;
my_variable = "Hello, World!"; // This is allowed
```

In expressions involving numeric and string values with the `+` operator, the numeric value is converted to a string.

```js
x = "The answer is " + 42; // "The answer is 42"
y = "37" + 7; // "377"
```

With all other operators, including the unary plus operator, in expressions involving a string and a number, the string is converted to a number.

```js
"37" - 7; // 30
"37" * 7; // 259
+"37";    // 37
```

In the case that a string has a value that can be parsed as a number, there are two methods that can be used for explicitly converting the data type to a number: `parseInt()` and `parseFloat()`.

```js
let x = "42";
parseInt(x, 10); // It is best practice to include the radix parameter
parseInt(x, 7); // 30

let y = "3.14";
parseFloat(y); // 3.14
```

## Literals
Literals represent values (not variables) that you literally provide in your script. JavaScript has the following types of literals:
- Array literals, such as `["HTML", "CSS", "JS"]`
- Boolean literals, such as `true` and `false`
- Numeric literals, such as `42`, `0x123`,  and `123.4`
- Object literals, such as `{name: "Aristotle", age: 42}`
- RegExp literals, such as `/ab+c/`
- String literals, such as `"Hello, World!"`
- Template literals, such as `` `Hello, ${name}` ``

### Array Literals
An array literal is a list of zero or more array elements enclosed in square brackets (`[]`). When the array literal is evaluated, it creates a new array object with the specified values as its elements and its `length` set to the number of arguments specified. A few things to note:
- The last trailing comma is ignored.
- If there are two consecutive commas, the array leaves an empty slot for an item at this position.
- It is best practice to explicitly declare the missing elements as `undefined` or as comments.

```js
const arr = ["home", /* empty */, "school", /* empty */,];
console.log(arr); // [ 'home', <1 empty item>, 'school', <1 empty item> ]
arr.length(); // 4
arr[0]; // 'home'
arr[1]; // undefined
```

### Boolean Literals
The Boolean type has two literal values: `true` and `false`. The Boolean object is a wrapper around the primitive data type, therefore, the primitive Boolean values `true` and `false` should not be confused with the `true` and `false` values of the Boolean object.

```js
const bool = true;
console.log(bool); // true
!bool; // false
```

### Numeric Literals
The numeric literals include integer literals in different bases and floating-point literals in base-10. JavaScript requires numeric literals to be unsigned, therefore, expressions such as `-123.4` are interpreted as a unary minus operator (`-`) applied to the numeric literal `123.4`.

Integer and `BigInt` literals can be written in decimal, hexadecimal, octal, and binary base.
- A decimal integer is written without a leading zero (`0`).
- An octal integer is written with a leading `0`, `0o`, or `0O`.
- A hexadecimal integer is written with a leading `0x` or `0X`.
- A binary integer is written with a leading `0b` or `0B`.
- A `BigInt` literal is written with a trailing `n` such as `123n`.

A floating-point literal can include an unsigned integer followed by a decimal point (`.`) followed by a fractional part followed by an exponent. The exponent is an `e` or `E`, followed by a sign `+` or `-` followed by an integer. A floating-point literal must have at least one digit, and either a decimal point or `e` or `E`.

```js
3.14159 // includes only the decimal point
.123456789 // includes only the decimal point
3.1E+12 // includes both a decimal point and an exponent
.1e-34 // includes both a decimal point and an exponent
```

### Object Literal
An object literal is a list of pairs of property names and values, enclosed in curly braces (`{}`). The property names can even be numeric or string literals, and objects can be nested inside another object.

If the property name is not a valid JavaScript identifier, it must be enclosed in quotes. Property names that are not valid identifiers can only be accessed using the bracket notation (`[]`) and can not through the dot (`.`) syntax.

```js
const car = {name: "Saturn", brand: "Honda"};
const garage = {
	cars: {a: "Honda", b: "Toyota"},
	7: "Mercedez"
}

garage.cars.b; // "Toyota"
garage[7]; // "Mercedez"
```

### RegExp Literals
A regex literal is a pattern enclosed between slashes (`/`) that are used to match character combinations in strings. The following is an example of a regex literal that matches any string containing the pattern `"abc"` anywhere within it.

```js
const re = /abc/; // RegExp literal
const str = "abcd"; // String literal

// If there was no match found, this would return null
str.match(re); // [ 'abc', index: 0, input: 'abcd', groups: undefined ]
```

### String Literals
A string literal is zero or more characters enclosed in double (`"`) or single (`'`) quotation marks. A string must be delimited by the same type of quotation marks.

You should use string literals unless you specifically need to use a `String` object. You can call any of the `String` object's methods on a string literal value. JavaScript automatically converts the string literal to a temporary `String` object, calls the method, then discards the temporary `String` object.

```js
const str = "Jojo's cat";
str.length; // 10
```

### Template Literals
Template literals provide syntactic sugar for constructing strings. Template literals are enclosed by the back-tick (<code>`</code>) character instead of double or single quotes.

```js
// Basic literal string
`In JavaScript, 'n' is a line feed.`

// Multiline string
`In JavaScript, template strings can run
over multiple lines, but double and single
quoted strings can not.`

// String interpolation
const name = "Lev";
`Hello ${name}, how are you today?` // "Hello Lev, how are you today?"
```

