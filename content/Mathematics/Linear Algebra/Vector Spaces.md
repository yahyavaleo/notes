A **group** is a set of elements and an operation defined on these elements that obeys some properties called the group axioms. Groups play an important role in computer science. Besides providing a framework for operations on sets, they are heavily used in cryptography, coding theory, and graphics.

Consider a set $\mathcal{G}$ and a binary operation $\otimes$ defined on $\mathcal{G}$. Then $G \coloneqq ( \mathcal{G}, \otimes)$ is called a group if the following axioms hold:
- Closure of $\mathcal{G}$ under $\otimes$: $\forall x, y \in \mathcal{G} : x \otimes y \in \mathcal{G}$
- Associativity: $\forall x,y,z \in \mathcal{G} : (x \otimes y) \otimes z = x \otimes (y \otimes z)$
- Identity element: $\forall x \in \mathcal{G} \exists e \in \mathcal{G} : x \otimes e = x \text{ and } e \otimes x = x$
- Inverse element: $\forall x \in \mathcal{G} \exists y \in \mathcal{G} : x \otimes y = e \text{ and } y \otimes x = e$, where $e$ is the identity element.

If additionally, the group obeys the commutative property, that is, $\forall x,y \in \mathcal{G} : x \otimes y = y \otimes x$, then $G \coloneqq ( \mathcal{G}, \otimes)$ is an **Abelian group**.

**Vector spaces** are groups that, in addition to an inner operation, also contain an outer operation. A real-valued vector space $V = (\mathcal{V}, +, \cdot)$ is a set $\mathcal{V}$ with two operations:
$$
\begin{aligned}
+ &: \mathcal{V} \times \mathcal{V} \rightarrow \mathcal{V} \\
\cdot &: \mathcal{R} \times \mathcal{V} \rightarrow \mathcal{V}
\end{aligned}
$$
where
- $(\mathcal{V}, +)$ is an Abelian group
- Distributivity:
	- $\forall \lambda \in \mathbb{R}, \mathbf{x}, \mathbf{y} \in \mathcal{V} : \lambda \cdot (\mathbf{x} + \mathbf{y}) = \lambda \cdot \mathbf{x} + \lambda \cdot \mathbf{y}$
	- $\forall \lambda, \psi \in \mathbb{R}, \mathbf{x} \in \mathcal{V} : (\lambda + \psi) \cdot \mathbf{x} = \lambda \cdot \mathbf{x} + \psi \cdot \mathbf{x}$
- Associativity for outer operation: $\forall \lambda, \psi \in \mathbb{R}, \mathbf{x} \in \mathcal{V} : \lambda \cdot (\psi \cdot \mathbf{x}) = (\lambda \cdot \psi) \cdot \mathbf{x}$
- Identity element for outer operation: $\forall \mathbf{x} \in \mathcal{V} : 1 \cdot \mathbf{x} = \mathbf{x}$

The elements $\mathbf{x} \in \mathcal{V}$ are called **vectors**. The identity element of $(\mathcal{V}, +)$ is the zero vector $\mathbf{0} = [0,\dots,0]^\intercal$, and the inner operation $+$ is called vector addition. The elements $\lambda \in \mathcal{R}$ are called **scalars** and the outer operation $\cdot$ is scalar multiplication.

A **vector subspace** is a nonempty subset of a vector space with the property that it is closed under the $+$ and $\cdot$ vector space operations. For every vector space $V$, the trivial subspaces are $V$ itself and $\lbrace 0 \rbrace$.

For $U$ to be a subspace of $V$, it needs to be shown that:
- $\mathcal{U} \ne \emptyset$, in particular: $\mathbf{0} \in \mathcal{U}$
- Closure of $U$ under the outer operation: $\forall \lambda \in \mathbb{R} \forall \mathbf{x} \in \mathcal{U}: \lambda \mathbf{x} \in \mathcal{U}$
- Closure of $U$ under the inner operation: $\forall \mathbf{x}, \mathbf{y} \in \mathcal{U}: \mathbf{x} + \mathbf{y} \in \mathcal{U}$
