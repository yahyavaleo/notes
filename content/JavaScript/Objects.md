An object is a mutable, unordered collection of properties, which are key-value pairs. A property can represent either data or a function, in which case, it is called a method. A JavaScript object inherits the properties of its parent called its prototype. Almost all objects ultimately inherit from `Object`.

## Creating objects
Objects can be created through the following mechanism:
- the object initializer syntax
- the `Object(value)` constructor returns an object wrapper of a primitive value.
- the `Object.create(proto)` method creates an object with the specified prototype.
- the `Object.fromEntries(iterable)` method creates an object from a list of key-value pairs.

```js
// Object initializer
let a = {};
let b = { x: 1, y: 2};

// Object() constructor
let a = new Object();   // a = {}
let b = new Object(42); // b = Number { 42 }

// Object.create() method
let a = Object.create(null);         // a has no prototype
let b = Object.create({x: 1, y: 2}); // c has a custom prototype

// Object.fromEntries() method
const arr = [["x", 42], ["y", 37]];
let a = Object.fromEntries(arr); // // a = { x: 42, y: 37 }
```

The object initializer has some extended syntax:
- Shorthand properties allow to define a property from an another variable without redundancy.
- Shorthand methods allow to define a method without the `function` keyword.
- Computed property names allow the property name to be computed dynamically.
- Spread operator allows to spread own properties of another object.

```js
let x = 42;
let o = { y: 37, };

let obj = {
	// Shorthand property
	x, // equivalent to x: x

	// Shorthand method
	fn() { // equivalent to fn: function() {}
		console.log("Hello, World!");
	},

	// Computed property name
	[`prop-${x}`]: 42, // equivalent to "prop-42": 42

	// Spread operator
	...o, // equivelant to y: 37
};
```

## Object properties
A property is a fundamental building block of an object that associates a key with a value. A property consists of the following parts:
- A name (also called a key), which is either a string or a symbol.
- A value which can be anything. A property that has a function as its value is called a method.
- Some attributes, which specify how the property can be read and written.

A property can have these attributes:
- `writable`, indicating whether the property can be changed by assignment.
- `enumerable`, indicating whether the property can be iterated over in a `for...in` loop.
- `configurable`, indicating whether the property can be deleted and have its attributes changed.

The property's value (including the getter and setter) and its attributes are stored in a data record called the property descriptor. Object properties can be categorized into two types:
- Data property, which associates a key with a value.
- Accessor property, which associates a key with an accessor function (getter or setter).

Accessor properties have their value indirectly represented through the getter (`get propName()`) and setter (`set propName(value)`) functions. However, accessor properties behave like regular data properties on the surface, because the getter and setter functions are invoked automatically.

```js
const square = {
	length: 42,
	get area() { return Math.pow(this.length, 2); },
	set area(area) { this.length = Math.sqrt(area); }
};

square.area; // => 1764: 42*42
square.area = 9; // square.length = 3 
```

## Accessing properties
There are two ways to access properties:
- Dot notation, `object.propertyName`, where the property name must be a valid identifier.
- Bracket notation, `object[expression]`, where the expression should evaluate to a string or a symbol that represents the property name.

When querying, if the property does not exist (and can not be found in the prototype chain), `undefind` is returned. However, when setting a property that does not exist, a new property is created with that name and the specified value is assigned to it.

```js
// Dot notation
const variable = object.propertyName;
object.for = value; // identifier can be a reserved keyword

// Bracket notation
const variable = object["property name"]; // expression can be string literal
object[property_name()] = value; // expression can be dynamically computed
```

Additionally, the optional chaining `?.` operator can also be used to access an object's property. It is a shorthand for testing the existence of properties. If the accessed property is `undefined` or `null`, the expression short circuits, and evaluates to `undefined` instead of throwing an error.

```js
// these two are equivalent
obj.first === null || obj.first === undefined ? undefined : obj.first.second;
object.first?.second;
```

## Deleting properties
The `delete` operator is used to delete an own property of an object. If the deletion was successful, `true` is returned, otherwise `false` is returned.

```js
delete object.property
delete object[property]
```

## Object mutability
Objects are mutable by default, but they can be made immutable in three stages to prevent other code from altering them:
- An object is extensible if new properties can be added to it and its prototype can be reassigned.
- An object is sealed if it is not extensible and all its properties are non-configurable.
- An object is frozen if it is not extensible, all its properties are non-configurable, and all its data properties are non-writable.

## Static methods
These are static methods provided by the `Object` class.
### Manipulation methods
These methods modify the properties of an object:

| Method                                         | Description                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| `Object.assign(target, sources)`               | Copies all enumerable own properties from one or more sources to a target object. |
| `Object.defineProperties(obj, props)`          | Defines new or modifies existing properties directly on an object.                |
| `Object.defineProperty(obj, prop, descriptor)` | Defines new or modifies an existing property directly on an object.               |

```js
// Object.assign() method
let source = { x: 1, y: 2 };
let target = { x: 3 };
Object.assign(target, source); // target = {x: 1, y: 2}

// Object.defineProperties() method
let obj = {};
props = {
	x: {
		value: 42,
		writable: true
	}
};
Object.defineProperties(obj, props); // obj = { x: 42 }

// Object.defineProperty() method
let obj = {};
let prop = "x";
let descriptor = {
	value: 42,
	writable: true
};
Object.defineProperty(obj, prop, descriptor); // obj = { x: 42 }
```
### Iteration methods
These methods provide a way to iterate over an object:

| Method                                       | Description                                                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `Object.entries(obj)`                        | Returns an array containing the key-value pairs of all own enumerable string properties of the given object.          |
| `Object.keys(obj)`                           | Returns an array containing the names of all own enumerable string properties of the given object.                    |
| `Object.values(obj)`                         | Returns an array containing the values of all own enumerable string properties of the given object.                   |
| `Object.getOwnPropertyNames(obj)`            | Returns an array containing the names of all own enumerable and non-enumerable string properties of the given object. |
| `Object.getOwnPropertySymbols(obj)`          | Returns an array containing the names of all own enumerable and non-enumerable symbol properties of the given object. |
| `Object.getOwnPropertyDescriptor(obj, prop)` | Returns the property descriptor for the given property of the given object.                                           |
| `Object.getOwnPropertyDescriptors(obj)`      | Returns an object containing the property descriptors of all own properties of the given object.                      |

```js
let obj = {
	x: 42, // enumerable string property
	[Symbol("sym")]: 0, // enumerable symbol property
};
let props = { // non-enumerable string property
	y: {
		value: 37,
		enumerable: false
	}
};
Object.defineProperties(obj, props);

// Object.entries() method
Object.entries(obj); // => [["x", 42]]

// Object.keys() method
Object.keys(obj); // => ["x"]

// Object.values() method
Object.values(obj); // => [42]

// Object.getOwnPropertyNames() method
Object.getOwnPropertyNames(obj); // => ["x", "y"]

// Object.getOwnPropertySymbols() method
Object.getOwnPropertySymbols(obj); // => [Symbol("sym")]

// Object.getOwnPropertyDescriptor() method
Object.getOwnPropertyDescriptor(obj, x);
// => { value: 42, writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors() method
Object.getOwnPropertyDescriptors(obj);
/* => {
	x: { value: 42, writable: true, enumerable: true, configurable: true },
	y: { value: 37, writable: false, enumerable: false, configurable: false },
	Symbol("sym"): { value: 0, writable: true, enumerable: true, configurable: true }

} */
```

### Query methods
These methods query an object for specific information:

|Method|Description|
|---|---|
|`Object.getPrototypeOf(obj)`|Returns the prototype of the given object.|
|`Object.hasOwn(obj, prop)`|Returns `true` if the given object has the given property as its own property, otherwise returns `false`.|
|`Object.isExtensible(obj)`|Returns `true` if the given object is extensible, otherwise returns `false`.|
|`Object.isSealed(obj)`|Returns `true` if the given object is sealed, otherwise returns `false`.|
|`Object.isFrozen(obj)`|Returns `true` if the given object is frozen, otherwise returns `false`.|
|`Object.is(value1, value2)`|Returns `true` if both arguments have exactly the same value, including `NaN`.|

```js
let obj = { x: 42 };

// Object.getPrototypeOf() method
Object.getPrototypeOf(obj); // => Object.prototype

// Object.hasOwn() method
Object.hasOwn(obj, "x"); // => true

// Object.isExtensible() method
Object.isExtensible(obj); // => true

// Object.isSealed() method
Object.isSealed(obj); // => false

// Object.isFrozen() method
Object.isFrozen(obj); // => false

// Object.is() method
Object.is(NaN, NaN); // => true
```

### Immutability methods
These methods are used to make objects immutable so they can not be altered by other code:

| Method                          | Description                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Object.preventExtensions(obj)` | Makes the object non-extensible so new properties cannot be added to it.                                        |
| `Object.seal(obj)`              | Seals the given object so its properties cannot be deleted, though existing properties still remain modifiable. |
| `Object.freeze(obj)`            | Freezes the given object so its properties cannot be deleted or modified. Existing properties become immutable. |

```js
let obj = { x: 42 };

// Object.preventExtensions() method
Object.preventExtensions(obj); // new properties can not be added

// Object.seal() method
Object.seal(obj); // moreover, existing properties can not be deleted

// Object.freeze() method
Object.freeze(obj); // moreover, existing properties can not be modified
```

## Instance methods
These methods exist to be polymorphic and a derived object should define its own implementation with sensible behaviors:

|Method|Description|
|---|---|
|`toString()`|Returns a string representation of the object and is invoked automatically whenever the object needs to be converted to a string.|
|`valueOf()`|Returns a primitive value of the object and is invoked automatically whenever the object needs to be converted to a primitive value.|
|`toLocaleString()`|Returns a string representation with locale-specific formatting of the object.|

```js
let naive = {};

let custom = {
	toString() {
		return "Custom";
	},
	toLocaleString() {
		return "Localized";
	},
	valueOf() {
		return 0;
	}
};

// toString() method
`${naive}`;  // => "[object Object]"
`${custom}`; // => "Custom"

// toLocaleString() method
naive.toLocaleString();  // => "[object Object]"
custom.toLocaleString(); // => "Localized"

// valueOf() method
naive + 0;  // => "[object Object]0": insensible behavior
custom + 0; // => 0: sensible behavior
```

## Prototypes
Prototypes are the mechanism by which objects inherit properties and methods. Every objects has a property called its prototype. The prototype is itself an object, so the prototype will have its own prototype, forming a prototype chain. The chain ends when a `null` prototype is reached.

When a property is queried, if the property can not be found in the object itself, the property is searched for in the prototype chain. This continues until either the property is found or the end of chain is reached, in which case `undefined` is returned.

```js
let obj = {
	__proto__: { x: 42 },
};

obj.x; // => 42: inherits from the prototype
```

## Serialization
Object serialization is the process of converting an object's state to a string from which it can be later restored. The functions `JSON.stringify()` and `JSON.parse()` serialize and restore JavaScript objects. These functions use the JSON data interchange format.

- Objects, arrays, strings, finite numbers, `true`, `false`, and `null` are serialized as it is.
- `NaN` and `Infinity` are serialized to `null`.
- Date objects are serialized to ISO-formatted date strings, but restoration leaves them as string.
- Functions, symbols, and the `undefined` value can not be serialized.
- If a property can not be serialized, it is simply omitted from the stringified output.

```js
let o = {x: 1, y: {z: [false, null, "a"]}};
let s = JSON.stringify(o); // s = '{"x":1,"y":{"z":[false,null,"a"]}}'
let p = JSON.parse(s);     // p =  {x: 1, y: {z: [false, null, "a"]}}
```
