A **system of linear equations** is a collection of one or more linear equations involving the same unknowns.
$$
\begin{aligned}
a_{11} x_1 + a_{12} x_2 + &\dots + a_{1n} x_n = b_1 \\
&\vdots \\
a_{m1} x_1 + a_{m2} x_2 + &\dots + a_{mn} x_n = b_m
\end{aligned}
$$
Systems of linear equations are important since many problems can be formulated as a linear system, and linear algebra provides the tools to solve them.

Every $n$-tuple $(x_1,\dots,x_n) \in \mathbb{R}$ that satisfies all the equations in a system of linear equations is called its **solution**. The set of all possible solutions of a linear system is called its solution set.

In general, for a system of linear equations, the solution set can contain either:
- no solution,
- a single unique solution, or
- or infinitely many solutions.

For a systematic approach to solving systems of linear equations, the coefficients $a_{ij}$ are collected into vectors (forming a vector equation), and the vectors are further collected into matrices (forming a matrix equation).

In a **vector equation**, each unknown is a weight for a column vector in a linear combination.
$$
\begin{bmatrix}
a_{11} \\
a_{21} \\
\vdots \\
a_{m1}
\end{bmatrix}
x_1 +
\begin{bmatrix}
a_{12} \\
a_{22} \\
\vdots \\
a_{m2}
\end{bmatrix}
x_2 + \cdots +
\begin{bmatrix}
a_{1n} \\
a_{2n} \\
\vdots \\
a_{mn}
\end{bmatrix}
x_n =
\begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m}
\end{bmatrix}
$$
A **matrix equation** is of the form: $A \mathbf{x} = \mathbf{b}$, where $A$ is the $m \times n$ coefficient matrix, $\mathbf{x}$ is the column vector of $n$ unknowns, and $\mathbf{b}$ is the column vector of $m$ constants.
$$
\begin{bmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \dots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
= \begin{bmatrix}
b_{1} \\
\vdots \\
b_{m}
\end{bmatrix}
$$
The system of linear equations can then be solved by using Gaussian elimination. Gaussian elimination is suitable to solve a system of linear equations with thousands of variables. However, it is impractical for systems with millions of variables, since its has a complexity of $O(n^3)$.

In practice, systems of many linear equations are solved indirectly, by either stationary iterative methods, such as the Richardson method, the Jacobi method, the Gauss-Seidel method, and the successive over-relaxation method, or Krylov subspace methods, such as conjugate gradients, generalized minimal residual, or biconjugate gradients.

The solution set of a linear system that has free variables is given as a **parametric description**, where the free variables act as parameters. Each different choice of a free variable determines a different solution of the system, and every solution of the system is determined by a choice of the free variable.
$$
\begin{aligned}
\begin{cases}
x_1 = 1 + 5 x_3 \\
x_2 = 4 - x_3 \\
x_3 = \text{free variable}
\end{cases}
\end{aligned}
$$
