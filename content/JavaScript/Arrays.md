An array is an ordered collection of values. Each value is an element, and each element has a numeric position called its index. JavaScript arrays are zero-indexed, dynamic, untyped, heterogeneous, and can be sparse.

Sparse arrays are arrays in which elements do not contiguous indices. The nonexistent elements are treated as `undefined` elements. When arrays are sufficiently sparse, the sparse elements are created as regular properties without creating the in-between elements as properties as well.

Since arrays are objects, the indices are effectively numeric property names. Array methods are designed to be generic so that they work correctly even with array-like objects. An array-like object is an object with the `length` property and numeric property names.

## Creating arrays
Arrays can be created through the following mechanisms:
- the array literal syntax
- the `Array()` constructor
- the spread operator (`...`) on an iterable object
- the `Array.of()` static method creates an array with the argument values as elements
- the `Array.from()` static method creates an array from an iterable object

The `Array()` constructor can be invoked to create arrays in three different ways:
- with no arguments: it creates an empty array.
- with a single numeric argument: it creates a sparse array with the specified length.
- with a non-numeric or multiple numeric arguments: it creates an array with those elements.

```js
// Array literal
let a = [2, 3, 5, 7, 11];
let sparse_array = [2, , 5, 7, 11,]; // trailing comma is ignored

// Array() constructor
let a = new Array();        // a = []
let b = new Array(5);       // b = [,,,,,]
let c = new Array(3, 2, 1); // c = [3, 2, 1]

// Spread operator
let a = [1, 2, 3];
let b = [0, ...a, 4]; // b = [0, 1, 2, 3, 4]

// Array.of() method
let b = Array.of(5) // b = [5]
let c = Array.of(3, 2, 1) // c = [3, 2, 1]

// Array.from() method
let a = Array.from(iterable); // any iterable object
```

## Array methods
### Iterative methods
These methods iterate over each element of the array sequentially using a callback function, skipping nonexistent elements. The callback function is usually invoked with three arguments: the value of the array element, its index, and the array itself.

```js
array.iterative_method((value, index, array) => {}, thisArg);
```

| Method                             | Description                                                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `forEach(callbackFn)`              | Calls the callback function once for each element of the array.                                                                                 |
| `map(callbackFn)`                  | Returns a new array in which each element is mapped from the corresponding element in the original array according to the callback function.    |
| `filter(callbackFn)`               | Returns a new array containing only those elements of the original array for which the callback function returns `true`.                        |
| `reduce(callbackFn, initialValue)` | Returns a single value formed by accumulating all the elements of the array according to the callback function, starting with an initial value. |

```js
// forEach() method
let arr = [-2, 0, 1, 1, 2];
arr.forEach(x => console.log(`${x}`)); // -2, 0, 1, 1, 2

// map() method
let arr = [1, 2, 3, 4];
arr.map(x => x*x); // => [1, 4, 9, 16]

// filter() method
let arr = [1, 2, 3, 4];
arr.filter(x => x % 2 == 1); // => [1, 3]

// reduce() method
let arr = [1, 2, 3];
arr.reduce((acc, val) => acc + val, 0); // => 6: ((0 + 1) + 2) + 3
```

### Sorting methods
These methods rearrange the elements of the array:

| Method             | Description                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `sort(callbackFn)` | Sorts the array in place using the callback function if provided or in alphabetical order if no argument is provided. |
| `reverse()`        | Reverse the order of the elements in the array in place.                                                              |

```js
// sort() method
let arr = [[2019,"MC",71], [2020,"MC",64];
arr.sort((x, y) => x[2] - y[2]); // arr = [[2020,"MC",64], [2019,"MC",71]]

// reverse() method
let arr = [1, 4, 3];
arr.reverse(); // arr = [3, 4, 1]
```

### Search methods
These methods search the array for a specific element:

| Method                  | Description                                                                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `indexOf(element)`      | Returns the index of the first element which matches the given element, or `-1` if no such element exists.                                    |
| `lastIndexOf(element)`  | Returns the index of the last element which matches the given element, or `-1` if no such element exists.                                     |
| `find(callbackFn)`      | Returns the value of the first element in the array for which the callback function returns `true`, or `undefined` if no such element exists. |
| `findIndex(callbackFn)` | Returns the index of the first element in the array for which the callback function returns `true`, or `-1` if no such element exists.        |

```js
// indexOf() method
let arr = [2, 1, 0, 1, 2];
arr.indexOf(2); // => 0

// lastIndexOf() method
let arr = [2, 1, 0, 1, 2];
arr.lastIndexOf(2); // => 4

// find() method
let arr = [-2, -1, 0, 1, 2];
arr.find(x => x < 0); // => -2

// findIndex() method
let arr = [-2, -1, 0, 1, 2];
arr.findIndex(x => x < 0); // => 0
```

### Query methods
These methods query the array for specific information:

| Method              | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `every(callbackFn)` | Returns `true` if the callback function returns `true` for every element in the array.        |
| `some(callbackFn`   | Returns `true` if the callback function returns `true` for at least one element in the array. |
| `includes(element)` | Returns `true` if the array contains the given element and `false` otherwise.                 |

```js
// every() method
let arr = [-2, -1, 0, 1, 2];
arr.every(x => x < 0); // => false

// some() method
let arr = [-2, -1, 0, 1, 2];
arr.some(x => x < 0); // => true

// includes() method
let arr = [1, 0, NaN, "a"];
arr.includes("a"); // => true
```

### Manipulation methods
These methods insert or delete elements from the array:

| Method              | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| `push(elements)`    | Appends one or more elements to the end of the array.       |
| `pop()`             | Removes and returns the last element of the array.          |
| `unshift(elements)` | Inserts one or more elements to the beginning of the array. |
| `shift()`           | Removes and returns the first element of the array.         |

```js
// push() method
let arr = [1, 2];
arr.push(3, 4); // arr = [1, 2, 3, 4]

// pop() method
let arr = [1, 2, 3, 4];
arr.pop(); // => 4 and arr = [1, 2, 3]

// unshift() method
let arr = [2, 3, 4];
arr.unshift(1); // arr = [1, 2, 3, 4]

// shift() method
let arr = [1, 2, 3, 4];
arr.unshift(); // => 1 and arr = [2, 3, 4]
```

### Slicing methods
These methods access a subarray or slice from the array:

| Method                                 | Description                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `slice(start, end)`                    | Returns a slice of the array from the start position to the end position.                                                                              |
| `splice(start, deleteCount, elements)` | Deletes the specified number of elements from the array, starting from the start position, and optionally inserts the given elements at that position. |
| `fill(value, start, end)`              | Fills the array from the start position to the end position with the specified value.                                                                  |

```js
// slice() method
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // => [2, 3]

// splice() method
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, "a"); // arr = [1, "a", 5]

// fill() method
let arr = [1, 2, 3, 4, 5];
arr.fill("a", 1, 3); // arr = [1, "a", "a", 4, 5]
```

### Conversion methods
These methods convert arrays to different representations:

| Method            | Description                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `toString()`      | Returns a string representing the elements of the array, with each element separated by a comma.             |
| `join(separator)` | Returns a string representing the elements of the array, with each element separated by the given separator. |
| `concat(arrays)`  | Returns a new array formed by combining the elements of two or more arrays.                                  |
| `flat(depth)`     | Returns a new array formed by flattening any nested arrays up to the specified depth.                        |

```js
// toString() method
let arr = [1, 2, 3, 4, 5];
arr.toString(); // => "1,2,3,4,5"

// join() method
let arr = [1, 2, 3, 4, 5];
arr.join("-"); // => "1-2-3-4-5"

// concat() method
let arr = [1, 2];
arr.concat([3, 4], [5]); // => [1, 2, 3, 4, 5]

// flat() method
let arr = [1, 2, [3, [4]], 5];
arr.flat(2); // => [1, 2, 3, 4, 5];
```
