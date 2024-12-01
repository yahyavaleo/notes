A **matrix** is an $m \times n$ rectangular array of elements $a_{ij}$ arranged in $m$ rows and $n$ columns.

$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$

Matrices are used to represent systems of linear equations and linear maps. Therefore, the study of matrices and its operations is a large part of linear algebra.

By convention, a $1 \times n$ matrix is called a **row vector**, and an $m \times 1$ matrix is called a **column vector**. An $m \times n$ matrix is an element of the set $\mathbb{R}^{m \times n}$.

The **addition** of two matrices $\mathbf{A}$ and $\mathbf{B}$ is defined as the element-wise sum:
$$
\mathbf{A} + \mathbf{B} =
\begin{bmatrix}
a_{11} + b_{11} & \dots & a_{1n} + b_{1n} \\
\vdots & & \vdots \\
a_{m1} + b_{m1} & \dots & a_{mn} + b_{mn}
\end{bmatrix}
$$
The **subtraction** of two matrices $\mathbf{A} - \mathbf{B}$ is computed as the element-wise difference:
$$
\mathbf{A} - \mathbf{B} = \mathbf{A} + (-1) \cdot \mathbf{B} =
\begin{bmatrix}
a_{11} - b_{11} & \dots & a_{1n} - b_{1n} \\
\vdots & & \vdots \\
a_{m1} - b_{m1} & \dots & a_{mn} - b_{mn}
\end{bmatrix}
$$
The **scalar product** of a matrix $\mathbf{A}$ by a scalar $c$ is computed by multiplying each element of $\mathbf{A}$ by $c$.
$$
c \mathbf{A} =
\begin{bmatrix}
c \times a_{11} & \dots & c \times a_{1n} \\
\vdots & & \vdots \\
c \times a_{m1} & \dots & c \times a_{mn}
\end{bmatrix}
$$
The **transpose** of a matrix $\mathbf{A}$, represented as $\mathbf{A}^\intercal$, is formed by turning rows of $\mathbf{A}$ into columns of $\mathbf{A}^\intercal$.
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{bmatrix}^\intercal =
\begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6 \\
\end{bmatrix}
$$
The **matrix product** of two matrices, $\mathbf{C} = \mathbf{A} \mathbf{B}$ is computed by multiplying all the elements of the $i$th row of $\mathbf{A}$ with corresponding elements of the $j$th column of $\mathbf{B}$ and summing them up to yield the element $c_{ij}$ of $\mathbf{C}$; this process is repeated for each element of $C$.
$$
c_{ij} = \sum^{n}_{k=1} a_{ik} b_{kj}
$$
Matrix multiplication should not be confused with the **Hadamard product** which is defined as the element-wise product of the corresponding elements of each matrix.

An **identity matrix** is an $n \times n$ square matrix containing $1$ on the main diagonal and $0$ elsewhere.
$$
\mathbf{I}_3 = 
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{bmatrix}
$$
The **inverse** of a matrix $\mathbf{A}$, denoted as $\mathbf{A}^{-1}$, is a matrix that when multiplied by the matrix $\mathbf{A}$ produces the identity matrix.
$$
\mathbf{A} \mathbf{A}^{-1} = \mathbf{I} = \mathbf{A}^{-1} \mathbf{A}
$$
It should be noted that the inverse matrix does not exist for all matrices. If an inverse does exist, the matrix $\mathbf{A}$ is called an **invertible matrix**, otherwise, it is called a **singular matrix**. When the matrix inverse exists, it is unique.

An inverse of an invertible matrix can be computed using Gaussian elimination. To compute the inverse $\mathbf{A}^{-1}$, the system of linear equations $\mathbf{A} \mathbf{X} = \mathbf{I}_n$ needs to be solved for $\mathbf{X}$, which is the inverse.
$$
\begin{bmatrix}
\mathbf{A} | \mathbf{I}_n
\end{bmatrix} \rightarrow
\begin{bmatrix}
\mathbf{I}_n | \mathbf{A}^{-1}
\end{bmatrix}
$$
This shows that when the augmented matrix is transformed into reduced row echelon form, the inverse is simply the right-most $n \times n$ part of the matrix.