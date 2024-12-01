Differential calculus is a major sub-field of calculus that studies the rates at which quantities change. It uses the concept of limits and differential to define derivatives, which is the rate at which a quantity change with respect to another quantity.

Although derivatives are defined using limits, calculating derivatives through this process is often cumbersome. Therefore, in practice, derivatives are usually calculated using standard derivatives in conjunction with differentiation rules.

Derivatives are widely used to find maximum and minimum points in functions and have numerous applications in fields like physics and economics. Equations involving derivatives, known as differential equations, are essential for describing natural phenomena.

## Derivative

Differentiation is a method used to compute the rate of change of a function $f(x)$ with respect to a variable $x$. This rate of change is called the derivative of $f$ with respect to $x$.

The first derivative of a function $y = f(x)$ with respect to $x$ is defined as:
$$
\dfrac{dy}{dx} = \lim_{\Delta x \to 0} \dfrac{f(x + \Delta x) - f(x)}{\Delta x}
$$
The process of finding the derivative by taking this limit is known as differentiation from first principles. In practice, however, it is often convenient to use the standard derivatives in conjunction with differentiation rules.

## Notation
Leibniz's notation uses the symbols $dy$ and $dx$ to represent infinitesimal changes in $y$ and $x$ respectively. If $y$ is a function of $x$, then its derivative with respect to $x$ can be written as:
$$
\dfrac{dy}{dx}
$$
Newton's notation uses a dot over the dependent variable. Newton's notation is most commonly used when time is the independent variable. If $y$ is a function of $t$, then its derivative with respect to $t$ can be written as:
$$
\dot{y}
$$
Lagrange's notation uses a prime mark to denote a derivative. If $f$ is a function, then its derivative with respect to $x$ can be written as:
$$
f'(x)
$$

## Implicit Differentiation
Implicit differentiation makes use of the chain rule to differentiate implicitly defined functions. If an implicit function $y(x)$ is defined by an equation $R(x,y) = 0$, it is generally not possible to solve it explicitly for $y$ and then differentiate.

In implicit differentiation, both sides of the equation $R(x,y) = 0$ are differentiated with respect to $x$, and the resulting equation is solved for the derivative $\frac{dy}{dx}$.

## Rules of Differentiation

### Linearity of Differentiation
Differentiation is a linear operation, that is, for any functions $f$ and $g$ with any real numbers $a$ and $b$, the derivative of the function $h(x) = a f(x) + b g(x)$ with respect to $x$ is:
$$
h'(x) = a f'(x) + b g'(x)
$$
The linearity of differentiation encapsulates three simpler rules:
- The constant factor rule: $(af)' = a f'$
- The sum rule: $(f+g)' = f' + g'$
- The difference rule: $(f - g)' = f' - g'$

### Power Rule
The power rule is used to differentiate functions of the form $f(x) = x^n$, when $n$ is a real number. Since differentiation is a linear operation, polynomials can also be differentiated using this rule.
$$
f'(x) = n x^{n-1}
$$
### Product Rule
The product rule is used to find derivatives of products of two or more functions. If $h(x) = f(x) \cdot g(x)$, the product rule states that the derivative of $h(x)$ is:
$$
h' = f' \cdot g + f \cdot g'
$$

### Quotient Rule
The quotient rule is used to find derivatives of the ratio of two functions. If $h(x) = \frac{f(x)}{g(x)}$ and $g(x) \ne 0$, the quotient rule states that the derivative of $h(x)$ is: 
$$
h' = \dfrac{f' \cdot g - f \cdot g'}{g^2}
$$

### Chain Rule
The chain rule is used to differentiate composite functions, $f(g(x)$, in terms of the derivatives of $f$ and $g$. If $h(x) = f(g(x))$, then the chain rule is:
$$
h'(x) = f'(g(x)) g'(x)
$$
If the variable $z$ depends on the variable $y$, which itself depends on the variable $x$, then the chain rule can be expressed in Leibniz's notation as:
$$
\dfrac{dz}{dx} = \dfrac{dz}{dy} \cdot \dfrac{dy}{dx}
$$

### Inverse Function Rule
The inverse function rule expresses the derivative of the inverse of a bijective function $f$ in terms of the derivative of $f$. More precisely, if $f$ is a bijective function, then:
$$
(f^{-1})'(a) = \dfrac{1}{f'(f^{-1}(a))}
$$
The inverse function rule is sometimes expressed in Leibniz's notation:
$$
\dfrac{dx}{dy} \cdot \dfrac{dy}{dx} = 1
$$

## Standard Derivatives
### Exponential Functions
The derivative of the natural exponential function, $e^x$, is the exponential function itself.
$$
\dfrac{d}{dx}e^x = e^x
$$
The derivative of the general exponential function, $b^x$, is:
$$
\dfrac{d}{dx} b^x = b^x \ln b
$$

### Logarithmic Functions
The derivative of the natural logarithmic function, $\ln x$, with $x > 0$ is:
$$
\dfrac{d}{dx} \ln x = \dfrac{1}{x}
$$
The derivative of the general logarithmic function, $\log_b x$ is:
$$
\dfrac{d}{dx} \log_b x = \dfrac{1}{x \ln b}
$$

### Trigonometric Functions
The derivatives of trigonometric functions result from those of sine and cosine by applying quotient rule. Knowing these derivatives, the derivatives of the inverse trigonometric functions are found using implicit differentiation.

| Function | Derivative | Inverse Function | Derivative |
| :--: | :--: | :--: | :--: |
| $\sin{x}$ | $\cos{x}$ | $\sin^{-1}{x}$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\cos{x}$ | $-\sin{x}$ | $\cos^{-1}{x}$ | $-\dfrac{1}{\sqrt{1-x^2}}$ |
| $\tan{x}$ | $\sec^2{x}$ | $\tan^{-1}{x}$ | $\dfrac{1}{x^2+1}$ |
| $\cot{x}$ | $-\csc^2{x}$ | $\cot^{-1}{x}$ | $-\dfrac{1}{x^2+1}$ |
| $\sec{x}$ | $\sec{x}\tan{x}$ | $\sec^{-1}{x}$ | $\dfrac{1}{\|x\|\sqrt{x^2-1}}$ |
| $\csc{x}$ | $-\csc{x}\cot{x}$ | $\csc^{-1}{x}$ | $-\dfrac{1}{\|x\|\sqrt{x^2-1}}$ |

## Applications of Derivatives

### Taylor's Theorem
The Taylor's theorem gives an approximation of a function around a point by a polynomial called the Taylor polynomial. The first order Taylor polynomial is the linear approximation of the function, and the second order Taylor polynomial is the quadratic approximation.

If $f: \mathbb{R} \to \mathbb{R}$ is $k$ times differentiable at a point $a$, then the function can be approximated as the $k$-th order Taylor polynomial with a small approximation error, $R_k$.
$$
f(x) = f(a) + f'(a)(x-a) + \dfrac{f''(a)}{2!}(x-a)^2 + \cdots + \dfrac{f^(k)(a)}{k!}(x-a)^k + R_k
$$

### Linear Approximation
The linear approximation is used to approximate a function $f$ as the first order Taylor polynomial by dropping the remainder.
$$
f(x) \approx f(a) + f'(a)(x-a)
$$
This is a good approximation when $x$ is close enough to $a$, since a curve approaches its tangent line. If $f$ is concave down in the interval $[x,a]$, then the approximation will be an overestimate. If $f$ is concave up, then the approximation will be an underestimate.

### Quadratic Approximation
The quadratic approximation is an improvement of the linear approximation, since it captures the effect of the second derivative. The quadratic approximation gives the best-fit parabola to a function.
$$
f(x) \approx f(a) + f'(a)(x-a) + \dfrac{f''(a)}{2}(x-a)^2
$$

### Extreme Value Theorem
The extreme value theorem states that if a function $f$ is continuous on the closed and bounded interval $[a,b]$, then $f$ has both an absolute maximum and an absolute minimum. That is, there exists numbers $c$ and $d$ in $[a,b]$ such that, for all $x$ in $[a,b]$:
$$
f(c) \le f(x) \le f(d)
$$
### Fermat's Theorem
The Fermat's theorem states that if a function has a local extremum at some point and the function is differentiable at that point, then the function's derivative at that point must be zero. Fermat's theorem gives only gives a necessary condition for extreme function values, as some stationary points are inflection points.

As a corollary, the global extrema of a function occur only at boundaries, non-differentiable points, and stationary points. The potential points extrema of a function should then be investigated by the second derivative test.

### Second Derivative Test
After establishing the critical points of a function, the value of the second derivative at those points determine whether such points are a local maxima or a local minima.
- If $f''(x) < 0$, then $f$ has a local maximum at $x$, and $f$ is concave down.
- If $f''(x) > 0$, then $f$ has a local minimum at $x$, and $f$ is concave up.
- If $f''(x) = 0$, then the test is inconclusive, and $x$ could possibly be an inflection point.

### Rolle's Theorem
The Rolle's theorem states that any differentiable function that attains equal values at two distinct points must have at least one stationary point somewhere between them.

More precisely, if a real-valued function is differentiable on the open interval $(a,b)$ and $f(a) = f(b)$, then there exists at least one $c$ in the open interval such that:
$$
f'(c) = 0
$$

### Mean Value Theorem
The mean value theorem states that for a given arc between two endpoints, there is at least one point at which the tangent to the arc is parallel to the secant through its endpoints.

More precisely, if a function is differentiable on the open interval $(a,b)$, then there exists at least one $c$ in the open interval such that:
$$
f'(c) = \dfrac{f(b) - f(a)}{b - a}
$$

### L'Hopital's Rule
The L'Hopital's rule allows evaluating limits of indeterminate form using derivatives. It states that if the limit of a quotient is in determinate form:
$$
\lim_{x \to c} \dfrac{f(x)}{g(x)} = \dfrac{0}{0} \text{ or } \lim_{x \to c} \dfrac{f(x)}{g(x)} = \dfrac{\infty}{\infty}
$$
then, the following substitution can be used, possibly repeatedly, given the functions are differentiable and $g'(x) \ne 0$ for all $x$ except possibly at $c$.
$$
\lim_{x \to c} \dfrac{f(x)}{g(x)} = \lim_{x \to c} \dfrac{f'(x)}{g'(x)}
$$

### Intermediate Value Theorem
The intermediate value theorem states that if $f$ is a continuous function on the closed interval $[a,b]$, then $f$ takes on any value between $f(a)$ and $f(b)$ at some point in the interval.

### Balzano's Theorem
Balzano's theorem is a special case of the intermediate value theorem. It states that if $f$ is a continuous function on the closed interval $[a,b]$, and $f(a)$ and $f(b)$ have opposite signs, then there is at least one $c$ such that $f(c) = 0$.

### Newton's Method
Newton's method is a numerical method for solving equations. It starts with an initial guess and produces successively better approximations to the root of a function.

If $f: \mathbb{R} \to \mathbb{R}$ is a differentiable function, and $x_0$ is an initial guess for the root of $f$, if $f'(x_0) \neq 0$, then Newton's method updates the guess according to the following formula. This process iteratively improves the estimate by using the tangent line at each point.
$$
x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}
$$
Although Newton's method can give very fast approximations to a solution, several things can go wrong:
- If $f'(x) = 0$, then Newton's method immediately fails, as it attempts to divide by zero.
- The approximations can cycle, rather than converge to a solution.
- The approximations can even diverge to infinity, when $f'(x)$ is small but not zero.
- The Newton's method is sensitive to the initial guess, often leading to chaotic dynamics.
