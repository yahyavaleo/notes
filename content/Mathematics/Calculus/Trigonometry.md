Trigonometry is a branch of mathematics concerned with relationships between angles and side lengths of triangles.

## Trigonometric Functions
The trigonometric functions are real functions that relate an angle of a right-angled triangle to ratios of two side lengths.

| Function | Description | Relationship |
| :--: | :--: | :--: |
| sine | $\dfrac{\text{opposite}}{\text{hypotenuse}}$ | $\sin{\theta} = \cos(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\csc{\theta}}$ |
| cosine | $\dfrac{\text{adjacent}}{\text{hypotenuse}}$ | $\cos{\theta} = \sin(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\sec{\theta}}$ |
| tangent | $\dfrac{\text{opposite}}{\text{adjacent}}$ | $\tan{\theta} = \dfrac{\sin{\theta}}{\cos{\theta}} =\cot(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\cot{\theta}}$ |
| cotangent | $\dfrac{\text{adjacent}}{\text{opposite}}$ | $\cot{\theta} = \dfrac{\cos{\theta}}{\sin{\theta}} = \tan(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\tan{\theta}}$ |
| secant | $\dfrac{\text{hypotenuse}}{\text{adjacent}}$ | $\sec{\theta} = \csc(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\cos{\theta}}$ |
| cosecant | $\dfrac{\text{hypotenuse}}{\text{opposite}}$ | $\csc{\theta} = \sec(\dfrac{\pi}{2} - \theta) = \dfrac{1}{\sin{\theta}}$ |

## Parity
The cosine and the secant are even functions, while the other trigonometric functions are odd functions. That is:
- $\sin(-\theta) = -\sin{\theta}$
- $\cos(-\theta) = \cos{\theta}$
- $\tan(-\theta) = -\tan{\theta}$
- $\cot(-\theta) = -\cot{\theta}$
- $\sec(-\theta) = \sec{\theta}$
- $\csc(-\theta) = -\csc{\theta}$

## Periods
All trigonometric functions are period functions of period $2 \pi$, except for the tangent and the cotangent, which have $\pi$ as the smallest period. That is, for every integer $k$:
- $\sin(\theta + 2k\pi) = \sin{\theta}$
- $\cos(\theta + 2k\pi) = \cos{\theta}$
- $\tan(\theta + k\pi) = \tan{\theta}$
- $\cot(\theta + k\pi) = \cot{\theta}$
- $\sec(\theta + 2k\pi) = \sec{\theta}$
- $\csc(\theta + 2k\pi) = \csc{\theta}$

## Pythagorean Identity
The Pythagorean identity is the expression of the Pythagorean theorem in terms of the trigonometric functions. It is:
$$
\sin^2{\theta} + \cos^2{\theta} = 1
$$
Dividing through by $\cos^2{\theta}$ gives:
$$
\tan^2{\theta} + 1 = \sec^2{\theta}
$$
And dividing through by $\sin^2{\theta}$ gives:
$$
1 + \cot^2{\theta} = \csc^2{\theta}
$$

## Sum and Difference Formulas

The sum and difference formulas allow expanding the sine, cosine, and tangent of a sum or difference of two angles in terms of sines, cosines, and tangents of the angles themselves.
- $\sin(x + y) = \sin{x}\cos{y} + \cos{x}\sin{y}$
- $\cos(x + y) = \cos{x}\cos{y} - \sin{x}\sin{y}$
- $\tan(x + y) = \dfrac{\tan{x} + \tan{y}}{1 - \tan{x}\tan{y}}$
- $\sin(x - y) = \sin{x}\cos{y} - \cos{x}\sin{y}$
- $\cos(x - y) = \cos{x}\cos{y} + \sin{x}\sin{y}$
- $\tan(x - y) = \dfrac{\tan{x} - \tan{y}}{1 + \tan{x}\tan{y}}$

The sum formula for cosine can be used to derive the following two identities:
- $\cos^2(\dfrac{u}{2}) = \dfrac{1+\cos{u}}{2}$
- $\sin^2(\dfrac{u}{2}) = \dfrac{1-\cos{u}}{2}$

## Law of Sines
The law of sines states that for an arbitrary triangle with area $\Delta$, sides $a$, $b$, and $c$, and angles opposite those sides $A$, $B$, and $C$:
$$
\dfrac{\sin{A}}{a} = \dfrac{\sin{B}}{b} = \dfrac{\sin{C}}{c} = \dfrac{2 \Delta}{abc}
$$

## Law of Cosines
The law of cosines is an extension of the Pythagorean theorem:
$$
c^2 = a^2 + b^2 - 2ab\cos{C}
$$
or equivalently,
$$
\cos{C} = \dfrac{a^2 + b^2 - c^2}{2ab}
$$

## Law of Tangents
The law of tangents states that:
$$
\dfrac{\tan{\dfrac{A-B}{2}}}{\tan{\dfrac{A+B}{2}}} = \dfrac{a-b}{a+b}
$$

## Law of Cotangents:
If $s$ is the triangle's semi-perimeter, $(a+b+c)/2$, and $r$ is the radius of the triangle's incircle, the law of cotangents states that:
$$
\dfrac{\cot{\dfrac{A}{2}}}{s-a} = \dfrac{\cot{\dfrac{B}{2}}}{s-b} = \dfrac{\cot{\dfrac{C}{2}}}{s-c} = \dfrac{1}{r}
$$

## Heron's Formula
Heron's formula gives the area of a triangle in terms of the three side lengths $a$, $b$, and $c$. Letting $s$ be the semi-perimeter of the triangle, $s = (a+b+c)/2$, the area $A$ is:
$$
A = \sqrt{s(s-a)(s-b)(s-c)}
$$

## Euler's Formula
Euler's formula establishes the fundamental relationship between the trigonometric functions and the complex exponential function. Euler's formula states that, for any real number $x$:
$$
e^{ix} = \cos{x} + i\sin{x}
$$
When $x = \pi$, Euler's formula may be written as $e^{i \pi} = -1$, which is known as Euler's identity.

The trigonometric functions can be expressed in terms of the exponential function as:
$$
\sin{x} = \dfrac{e^{ix} - e^{-ix}}{2i}
$$
$$
\cos{x} = \dfrac{e^{ix} + e^{-ix}}{2}
$$
$$
\tan{x} = \dfrac{i(e^{-ix}-e^{ix})}{e^{ix}+e^{-ix}}
$$
