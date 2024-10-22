## Antiderivative
An antiderivative or indefinite integral of a function $f$ is a function $F$ whose derivative is equal to the original function $f$. This can be stated symbolically as:
$$
\dfrac{d}{dx} F(x) = f(x) \implies \int f(x) dx = F(x) + C
$$
The process of solving for antiderivatives is called antidifferentiation or indefinite integration, and its opposite operation is the differentiation. Antiderivatives are often denoted by capital Latin letters.

Antiderivatives are related to definite integrals through the second fundamental theorem of calculus. If $F$ is an antiderivative of the function $f$ over the interval $[a,b]$, then:
$$
\int^b_a f(x) dx = F(b) - F(a)
$$
Because of this, each of the infinitely many antiderivatives of a function $f$ may be called the indefinite integral of $f$ and written using the integral symbol with no bounds:
$$
\int f(x) dx
$$
If $F$ is an antiderivative of $f$, then every other antiderivative $G$ of $f$ differs from $F$ by a constant. Therefore, there exists a number $c$, called the constant of integration, such that $G(x) = F(x) + c$, for all $x$.

Every continuous function $f$ has an antiderivative, and one antiderivative $F$ is given by the definite integral of $f$ with variable upper bound, for any $a$ in the domain of $f$:
$$
F(x) = \int^x_a f(t) dt
$$
Finding antiderivatives of elementary functions is often considerably harder than finding their derivatives. Indeed, there is no predefined method for computing antiderivatives. Although, there exists many properties and techniques for finding antiderivatives.

The antiderivatives for some common functions are:
- $\int 1\ \mathrm{d}x = x + C$
- $\int a\ \mathrm{d}x = ax + C$
- $\int x^n \mathrm{d}x = \frac{x^{n+1}}{n+1} + C;\ n \neq -1$
- $\int \sin{x}\ \mathrm{d}x = -\cos{x} + C$
- $\int \cos{x}\ \mathrm{d}x = \sin{x} + C$
- $\int \sec^2{x}\ \mathrm{d}x = \tan{x} + C$
- $\int \csc^2{x}\ \mathrm{d}x = -\cot{x} + C$
- $\int \sec{x}\tan{x}\ \mathrm{d}x = \sec{x} + C$
- $\int \csc{x}\cot{x}\ \mathrm{d}x = -\csc{x} + C$
- $\int \frac{1}{x}\ \mathrm{d}x = \log|x| + C$
- $\int \mathrm{e}^{x} \mathrm{d}x = \mathrm{e}^{x} + C$
- $\int a^{x} \mathrm{d}x = \frac{a^{x}}{\log a} + C;\ a > 0,\ a \neq 1$
