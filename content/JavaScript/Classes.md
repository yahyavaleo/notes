A class is a template for creating objects. It encapsulates data with code to work on that data. Classes in JavaScript are mainly an abstraction over prototypes but also have some special syntax that are unique to classes.

## Defining classes
A class can be defined using either a class declaration or a class expression. A class declaration uses the `class` keyword with a class name and a class body. The class body contains the class elements (fields, accessor fields, and methods), which can be declared `private` or `static`.

The body of a class is always executed in strict mode even without the `"use strict"` directive. Moreover, class declarations have the same temporal dead zone restrictions as `let` or `const` and behave as if they are not hoisted, unlike function declarations.

```js
class MyClass {
	constructor() {}

	publicField;
	#privateField;

	get publicGetter() {}
	get #privateGetter() {}

	set publicSetter(x) {}
	set #privateSetter(x) {}

	publicMethod() {}
	#privateMethod() {}

	static publicStaticFeild;
	static #privateStaticFeild;

	static get publicStaticGetter() {}
	static get #privateStaticGetter() {}

	static set publicStaticSetter(x) {}
	static set #privateStaticSetter(x) {}

	static publicStaticMethod() {}
	static #privateStaticMethod() {}
}
```

A class expression is used to define a class inside an expression. A class expression is very similar to a class declaration, except that the class name is optional and can be omitted to create anonymous classes. In case of named class expressions, the class name is only visible within the class body.

```js
// anonymous class expression
const C = class { /* class body */ }

// named class expression
const C = class Name { /* class body */ }
```

## Constructor
A constructor is a special method of a class that initializes an object instance of that class. Since the `new` operator automatically creates the new object, the constructor itself only needs to initialize the state of that new object. Within a class constructor, `this` points to the newly created instance.

When a constructor is called with the `new` operator, it goes through the following steps:
1. It creates an empty `Object` (for convenience, call it `newInstance`).
2. If the constructor has a `prototype` property, it points `newInstance.prototype` to the constructor's `prototype` property, otherwise, it remains pointed at `Object.prototype`.
3. It executes the constructor function with the given arguments, binding `newInstance` as the `this` context.
4. If the constructor function does not have a `return` statement (recommended), it returns `newInstance`, otherwise, if the return value is an object, that object is returned.

```js
class Person {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}
let adam = new Person("Adam", 18, "M");
adam; // => Object { name: "Adam", age: 18, gender: "M" }
```

If a class explicitly defines a constructor and derives from a parent class, the derived class constructor must explicitly call the parent class constructor using `super()`. It calls the parent class constructor and binds the parent class public fields with `this` context.

```js
class Student extends Person {
	constructor(name, age, gender, school) {
		super(name, age, gender);
		this.school = school;
	}
}
let adam = new Student("Adam", 18, "M", "Ivy School");
adam; // => Object { name: "Adam", age: 18, gender: "M", school: "Ivy School" }
```

Because `this` context is not fully initialized until `super()` is called, `super()` must appear before `this` keyword is used.  After `super()` is called, the derived class constructor can safely use `this` to initialize the derived class fields.

If a constructor is not specified, the default constructor is used. For base classes the default constructor is empty. For derived classes, the default constructor calls the parent constructor, passing along any arguments that were provided.

```js
// for base class
constructor() {}

// for derived class
constructor(...args) {
	super.call(...args);
}
```

## Instantiation
A class is instantiated by calling the class constructor with the `new` operator. It is an error to call a constructor without the `new` operator. A different instance is created each time the constructor is called with the `new` operator.

```js
class MyClass {
	constructor(x) { this.x = x; }
}
let instance = new MyClass(42); // instance = Object { x: 42 }
```

## Instance fields
An instance field is a data property that is added to every instance of the class. Public instance fields are defined on the instance directly rather than the class `prototype` property, however they participate in prototype inheritance.

 Fields can be declared with and without an initializer. Fields without an initializer are initialized to `undefined`. In the field initializer, `this` refers to the created instance and `super` refers to the class prototype. Moreover, field names can be computed similar to property names.

```js
class Account {
	id;                  // field
	username = "adam";   // field with initializer
	[`vault${42}`] = 42; // computed field name
}
const account = new Account();
account.id;       // => undefined
account.username; // => "adam"
account.vault42;  // => 42
```

Computed field names are evaluated only once at class initialization but the field initializer expression is evaluated each time a new instance is created. This means that every instance has the same set of field names but the initialized values can be different.

## Accessor fields
Accessor fields behave similar to instance fields, but instead of directly accessing a property, they invoke a pair of functions called getter (`get fieldName()`) and setter (`set fieldName(value)`). The getter and setter functions are invoked automatically when the field name is accessed.

```js
class Square {
	length = 42;
	// area is an accessor field
	get area() { return Math.pow(this.length, 2); }
	set area(area) { this.length = Math.sqrt(area); }
}
const square = new Square();
square.area;     // => 1764: 42*42
square.area = 9; // square.length = 3 
```

## Instance methods
An instance method is a function property that is available on all class instances. Public instance methods are defined on the `prototype` property of the class and are thus shared by all instances of the class.

The function name of an instance method can be computed. Moreover, instance methods can be regular functions, generator functions, async functions, or async generator functions. Instance methods are created using the method definition syntax.

```js
class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	// public instance method
	area() { return this.length * this.width; }
}
const rect = new Rectangle(4, 8);
rect.area(); // => 32
```

## Static properties
A static property is defined on the class itself instead of an individual instance of the class. Fields, accessor fields, and methods can be declared static properties by using the `static` keyword.

```js
class Random {
	// static fields
	static algorithm = "LCG";
	static #seed = 42;

	// static accessor field
	static get seed() { return this.#seed; }
	static set seed(arg) { this.#seed = arg; }

	// static method
	static generate() {
		let a = 1103515245;
		let c = 12345;
		let m = Math.pow(2, 31);
		return (a * this.seed + c) % m;
	}
}
Random.algorithm; // => "LCG"
Random.seed = 42;
Random.generate(); // => 1250496027
```

Static methods are often utility functions such as functions to create or clone instances. Whereas static fields are useful for caches, fixed configurations, or any other data that does not need to be replicated across instances.

Besides static properties, classes can also have static initialization blocks. A static initialization block is evaluated during class initialization. It allows to implement complex initialization for the class itself, similar to how a constructor initializes an instance.

```js
class Modern {
	static { // a static initialization block
		console.log("Initializing");
	}
} // => "Initializing"

// similar initialization achieved by exposing a method to the user
class Legacy {
	static init() {
		console.log("Initializing");
	}
}
Legacy.init(); // => "Initializing"
```

## Private properties
A private property can not be referenced outside the class. Most class properties, except for the class constructor, can be declared private by prefixing the property name with the `#` symbol. Unlike public properties, private properties do not participate in prototype inheritance.

```js
class Shop {
	#secret = 42; // private instance field
	
	#transfer(amount) { // private instance method
		console.log(`Transferring ${amount} USD to bank`);
	}
	
	purchase(product) {
		let amount = (product === "chocolate") ? 100 : 50;
		this.#transfer(amount); // invoking the private method
	}
}
const shop = new Shop();
shop.purchase("chocolate"); // => "Transferring 100 USD to bank"
shop.#secret; // SyntaxError: reference to private property outside the class
```

Private properties can only be accessed through the dot notation (the hash prefix is part of the property name). Moreover, all private property names within a class must be unique, with the exception of getter and setter pairs.

```js
class C {
	// this is legal because x and #x are different names
	x;
	#x;

	// this is legal because getter and setter must share the same name
	get #y() { return this.#x; }
	set #y(arg) { this.#x = arg; }

	// these are illegal because the namespace is shared
	#z;
	#z() {};         // SyntaxError
	static #z;       // SyntaxError
	static #z () {}; // SyntaxError
}
```

It is an error to attempt to remove declared private properties with `delete`. Accessing a nonexistent private property throws an error instead of returning `undefined` as public properties do.

```js
class C {
	#x;
	constructor() {
		delete this.#x; // SyntaxError: private property can not be deleted
		this.#y = 42;   // SyntaxError: reference to undeclared private property
	}
}
```

## Derived class
A derived class is a class that inherits all public elements from another class. The derived class can then extend the parent class by defining more properties or overriding existing properties. A derived class is declared with the `extends` keyword along with the parent class name.

```js
class Animal { // Animal is a base class
	age = 42;
	eat() {console.log("Eating"); }
	static home() { console.log("Home Sweet Home"); };
}
// Dog is a derived class and Animal becomes a parent class
class Dog extends Animal {
	bark() {console.log("Barking"); }
}
const dog = new Dog();
Dog.home(); // => "Home Sweet Home"
dog.age;    // => 42
dog.eat();  // => "Eating"
dog.bark(); // => "Barking"
```

If the derived class explicitly defines a constructor, it must call the parent class constructor using `super()`. It is the `super()` call that initializes and returns `this` . The derived class constructor can then modify the returned `this` object. Therefore, `this` is only accessible after the `super()` call.

```js
class Animal {
	name;
	constructor(name) { this.name = name; }
}
class Dog extends Animal {
	food;
	constructor(name, food) {
		super(name);
		this.food = food;
	}
}
const dog = new Dog("Mark", "Bones");
dog.name; // => "Mark"
dog.food; // => "Bones"
```

Since static methods are defined on the class itself but instance methods are defined on the `prototype` property of the parent class, the `extends` clause sets the prototype of both the derived class and the `prototype` property of the derived class.

```js
class ParentClass {}
class DerivedClass extends ParentClass {}

Object.getPrototypeOf(DerivedClass) === ParentClass; // => true
Object.getPrototypeOf(DerivedClass.prototype) === ParentClass.prototype; // => true
```

## Evaluation order
When a class declaration or class expression is evaluated, its elements are evaluated in this order:
1. The `extends` clause is evaluated, if present.
2. The `constructor` method (or default constructor if omitted) is extracted.
3. Field names are evaluated in the order of declaration. If the field name is computed, the computed expression is evaluated with `this` set to the `this` surrounding the class.
4. Methods and accessors are installed in the order of declaration.
	- Public instance methods and accessors are installed of the class `prototype` property.
	- Private instance methods and accessors are installed on the instance directly.
	- Static methods and accessors are installed on the class itself.
5. The class is initialized with the prototype specified by `extends` and implementation specified by the `constructor` method.
6. Field values are evaluated in the order of declaration.
	- For instance fields, the initializer expression is saved and evaluated during instance creation.
	- For static fields, the initializer is evaluated with `this` set to the class itself.
	- Static initialization blocks are evaluated with `this` set to the class itself.
7. The class is now fully initialized and can be used as a constructor function.
