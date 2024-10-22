JavaScript supports many different mechanisms for looping:
- `for`, `while`, and `do...while` loop rely on a condition test.
- `for...in` and `for...of` iterate over an object.

## `for` loop
The `for` loop repeats until the specified condition evaluates to `false`. The JavaScript `for` loop is very similar to the C `for` loop. If the condition expression is omitted, it is assumed to be `true`.

```js
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

The classic `for` loop can be used to iterate over an array. However, with modern JavaScript engines, it is unclear whether this approach has better performance than the other approaches.

```js
letters = [..."hello world"];
for(let i = 0; i < letters.length; i++) {
	console.log(letters[i]);
}
```

## `do...while` loop
The `do...while` loop repeats until the specified condition evaluates to `false`. The statements in the `do` block is always executed once before the condition is checked.

```js
let i = 0;
do {
	console.log(i);
	i += 1;
} while (i < 10);
```

## `while` loop
The `while` loop repeats until the specified condition evaluates to `false`. The condition is tested before the enclosed statements are executed.

```js
let i = 0;
while (i < 10) {
	console.log(i);
	i += 1;
}
```

## `for...in` loop
The `for...in` loop iterates over all the enumerable properties of an object. If the object is an array, it will iterate over all the user-defined properties in addition to the indexed positions. Therefore, it is better to use the traditional `for` loop with numeric indices to iterate over an array.

```js
const obj = { foo: 1, bar: 2 };
for (const prop in obj) {
	console.log(prop)
}
```

## `for...of` loop
The `for...of` loop iterates over the values of the properties of an iterable object (such as `Array`, `Map`, `Set`, and `arguments` object), unlike the `for...in` loop which can iterate over almost any object.

```js
const arr = [3, 5, 7]
arr.foo = "hello"

for (const i in arr) {
	console.log(i)
}
// Logs: "0" "1" "2" "foo"

for (const i of arr) {
	console.log(i)
}
// Logs: 3 5 7
```

The easiest method to loop over an array is through the `for...of` loop, which iterates over the value of each element in order. However, it has no special behavior for sparse arrays, and returns `undefined` for non-existent elements.

```js
letters = [..."hello world"];
for(let letter of letters) {
	console.log(letter); // => "h","e","l","l","o"," ","w","o","r","l","d"
}

// iterating over the index and value pair using the
// entries() method along with destructuring assignment
for(let [index, letter] of letters.entries()) {
	console.log(`${index}: ${letter}`);
}
```

## `break` and `continue`
The `break` statement is used to terminate a loop, or a `switch` statement. If `break` is used without a label, it terminates the innermost enclosing loop or `switch` statement. If `break` is used with a label, it terminates the specified labelled loop.

```js
// break without label
for (let i = 0; i < 10; i++) {
	if (i == 5) break;
}

// break with label
outer: while (true) {
	while (true) {
		break outer;
	}
}
```

In contrast to the `break` statement, the `continue` statement does not terminate the loop entirely. Instead, it only terminates the current iteration, and skips over to the next iteration. If `continue` is used with a label, it skips to the next iteration of the specified labelled loop.

```js
// continue without label
for (let i = 0; i < 10; i++) {
	if (i == 5) continue;
}

// continue with label
outer: while (true) {
	while (true) {
		continue outer;
	}
}
```
