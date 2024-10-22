## Limits
The limit of a function at a point $a$ is the value that the function approaches as $x$ approaches $a$. Note that the actual value at $a$ is irrelevant, and the function is not required to be defined at $a$.

A one-sided limit is the value that the function approaches as $x$ approaches $a$ from one side only. A two-sided limit exists if both the left and right limits are the same.
$$
\lim_{x \to a} f(x) = \lim_{x \to a^+} f(x) = \lim_{x \to a^-} f(x) = L
$$

## Continuity
A function is continuous if a small variation of its argument induces a small variation of the value of the function. This implies that there are no abrupt changes in value, known as discontinuities.

A function is continuous over an open interval if it is continuous at every point in the interval. A function is continuous at a point if it satisfies the following conditions:
- $f(a)$ is defined
- $\lim_{x \to a} f(x)$ exists
- $\lim_{x \to a} f(x) = f(a)$

## Fundamental Theorem
The fundamental theorem of calculus describes differentiating and integrating as inverse operations apart from a constant value. More precisely, it relates the values of antiderivatives to definite integrals.

The first part of the theorem states that the antiderivative $F$ of a function $f$ may be obtained as the integral of $f$ over an interval with the variable upper bound.
$$
F(x) = \int^x_a f(t) dt \implies F'(x) = f(x)
$$
The second part of the theorem states that the integral of a function $f$ over a fixed interval is equal to the change of any antiderivative $F$ between the ends of the interval.
$$
F'(x) = f(x) \implies \int^b_a f(x) dx = F(b) - F(a)
$$

**Related:**
- [[Differential Calculus]]
- [[Mathematics/Calculus/Graphs|Graphs]]
- [[Integral Calculus]]
- [[Trigonometry]]
