For any vector space, it is possible to find a set of vectors which can express every vector in the vector space as a linear combination of its elements. This set of vectors, called the basis of a vector space, is important since it allows to describe the complete vector space with only a small subset of vectors.

A set of vectors $\mathcal{A} = \lbrace \mathbf{x}_1, \dots, \mathbf{x}_k \rbrace \subseteq V$ is called a **generating set** of $V$ if every vector $\mathbf{v} \in V$ can be expressed as a linear combination of $\mathbf{x}_1, \dots, \mathbf{x}_k$. The set of all linear combinations of vectors in $\mathcal{A}$ is called the **span** of $\mathcal{A}$. A generating set $\mathcal{A}$ is called minimal if there exists no smaller set that spans $V$.

The **basis**, $\mathcal{B}$, of a vector space $V$ is a minimal generating set of $V$. Equivalently, $\mathcal{B}$ is a maximal linearly independent set of vectors in $V$. An example of a basis is the canonical basis for the set $\mathbb{R}^3$:
$$
\mathcal{B} =
\left\{
\begin{bmatrix}
1 \\ 0 \\ 0
\end{bmatrix},
\begin{bmatrix}
0 \\ 1 \\ 0
\end{bmatrix},
\begin{bmatrix}
0 \\ 0 \\ 1
\end{bmatrix}
\right\}
$$
The basis of a vector space is not unique, and a vector space can possess more than one basis. However, all bases possess the same number of elements called the basis vectors. The **dimension** of a vector space, denoted as $\text{dim}(V)$, is the number of basis vectors of $V$.

The basis of a subspace $U = \text{span}[\mathbf{x}_1,\dots,\mathbf{x}_m] \subseteq \mathbb{R}^n$ can be found by noticing that the basis is essentially a linearly independent subset of the spanning set $\{\mathbf{x}_1,\dots,\mathbf{x}_m\}$. Let $\mathbf{A}$ be a matrix whose columns are the spanning vectors. Then the spanning vectors associated with the pivot columns in the row echelon form of $\mathbf{A}$ are a basis of $U$.

The **rank** of a matrix is the dimension of the vector space spanned by its columns. The column rank of $\mathbf{A}$ is the dimension of the column space of $\mathbf{A}$, while the row rank is the dimension of the row space of $\mathbf{A}$. A fundamental result in linear algebra is that the column rank and row rank are always equal. Therefore, this number is simply called the rank of $\mathbf{A}$.

The rank of a matrix has some important properties:
- A square matrix $\mathbf{A} \in \mathcal{R}^{n \times n}$ is invertible if and only if $\text{rank}(\mathbf{A}) = n$.
- A linear equation system $\mathbf{A} \mathbf{x} = \mathbf{b}$ can be solved if and only if $\text{rank}(\mathbf{A}) = \text{rank}(\mathbf{A} | \mathbf{b})$.
- The kernel or null space of $\mathbf{A} \in \mathcal{R}^{m \times n}$ has the dimension $n - \text{rank}(\mathbf{A})$.
- A matrix $\mathbf{A} \in \mathcal{R}^{m \times n}$ has full rank if its rank equals the largest possible rank for a matrix of the same size. This means that the rank of a full rank matrix is $\text{min}(m,n)$. A matrix is said to be rank deficient if it does not have full rank.
