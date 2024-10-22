A vector $\mathbf{v} \in V$ is called a **linear combination** of vectors $\mathbf{x}_1, \dots, \mathbf{x}_k \in V$, if it is of the form with $\lambda_1, \dots, \lambda_k \in \mathbb{R}$:
$$
\mathbf{v} = \lambda_1 \mathbf{x}_1 + \cdots + \lambda_k \mathbf{x}_k = \sum^k_{i=1} \lambda_i \mathbf{x}_i \in V
$$
The zero vector, $\mathbf{0}$, can always be written as the linear combination of $k$ vectors $\mathbf{x}_1, \dots, \mathbf{x}_k$, because $\mathbf{0} = \sum^k_{i=1} 0 \mathbf{x}_i$ is always true. Therefore, non-trivial combinations of a set of vectors that represent $\mathbf{0}$ are those where not all scalar coefficients $\lambda_i$ are $0$. In such cases, some vectors can be represented as a linear combination of other vectors. That is, some vectors are linearly dependent on other vectors.
$$
\begin{aligned}
5 \mathbf{x_1} - 3 \mathbf{x_2} + 0 \mathbf{x_3} &= 0 \\
\Rightarrow \mathbf{x_2} &= \frac{5}{3} \mathbf{x_1}
\end{aligned}
$$
The vectors $\mathbf{x}_1, \dots, \mathbf{x}_k \in V$ are **linearly independent** if the linear combination to represent the zero vector has only the trivial solution, whereby all scalar coefficients are zero. Alternatively, the vectors are linearly independent if none of them can be expressed as a linear combination of other vectors.

Consequently, the vectors $\mathbf{x}_1, \dots, \mathbf{x}_k \in V$ are **linearly dependent** if and only if at least one of them can be expressed as a linear combination of other vectors. For such vectors, there is a non-trivial linear combination, such that $\mathbf{0} = \sum^k_{i=1} \lambda_i \mathbf{x}_i$ with at least one $\lambda_i \ne 0$.

Linear independence is an important concept in linear algebra, since a set of linearly independent vectors have no redundancy; that is, removing any of those vectors will result in a loss of information.

It should be noted that if at least one of the vectors $\mathbf{x}_1, \dots, \mathbf{x}_k$ is $\mathbf{0}$, then they are linearly dependent. The same holds if two vectors are identical.

In order to check whether a set of vectors $\mathbf{x}_1, \dots, \mathbf{x}_k$ are linearly independent, it needs to be shown that the following linear combination has only the trivial solution.
$$
\begin{aligned}
\lambda_1 \mathbf{x}_1 + \cdots + \lambda_k \mathbf{x}_k &= \mathbf{0} \\
\begin{bmatrix}
\mathbf{x_1} | \cdots | \mathbf{x_k}
\end{bmatrix}
\begin{bmatrix}
\lambda_1 \\ \vdots \\ \lambda_k
\end{bmatrix} &=
\begin{bmatrix}
0 \\ \vdots \\ 0
\end{bmatrix}
\end{aligned}
$$
This can be shown by using Gaussian elimination until the matrix is row echelon form. The pivot columns indicate the vectors which are linearly independent of the vectors to the left. The non-pivot columns can be expressed as linear combinations of the pivot columns to the left. Hence, all vectors are linearly independent if and only if all columns are pivot columns.

