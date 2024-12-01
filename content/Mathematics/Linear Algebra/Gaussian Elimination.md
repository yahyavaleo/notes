**Gaussian elimination** is an algorithm that performs elementary row operations on the augmented matrix until it is in the reduced row echelon form.

This method is used to:
- solve systems of linear equations,
- compute the rank of a matrix,
- compute the determinant of a matrix,
- compute the inverse of a matrix,
- check whether a set of vectors is linearly independent, or
- determine a basis for a vector space. 

An **augmented matrix** is a matrix obtained by appending the coefficient matrix with the column vector of constants.
$$
\begin{bmatrix}
a_{11} & \dots & a_{1n} & b_1 \\
a_{21} & \dots & a_{2n} & b_2 \\
\vdots & & \vdots & \vdots \\
a_{m1} & \dots & a_{mn} & b_m \\
\end{bmatrix}
$$
An **elementary row operation** is any one of the following operations:

| Operation | Description | Symbolic representation |
| - | - | - |
| Swap | Swap two rows of a matrix. | $R_i \Leftrightarrow R_j$ |
| Scale | Multiply a row by a nonzero constant. | $k R_i \Rightarrow R_i$ |
| Sum | Add a multiple of one row to another row. | $R_i + k R_j \Rightarrow R_i$ |

A matrix is in **row echelon form** if it satisfies the following conditions:
- All rows that contain only zeroes are at the bottom.
- The pivot of a row is strictly to the right of the pivot of the row above it. 
- All entries below a pivot in a column are zero. 
$$
\begin{bmatrix}
2 & \ast & \ast & \ast \\
0 & 1 & \ast & \ast \\
0 & 0 & 0 & 5 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
$$
A matrix is in **reduced row echelon form** if it satisfies the following conditions:
- It is in row echelon form.
- Every pivot is $1$.
- The pivot is the only nonzero entry in its column.
$$
\begin{bmatrix}
1 & 0 & \ast & 0 \\
0 & 1 & \ast & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
$$
The variables corresponding to the pivots in the row echelon form are called **basic variables**, and the other variables are called **free variables**.
  