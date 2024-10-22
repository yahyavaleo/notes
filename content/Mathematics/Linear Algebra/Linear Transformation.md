A **linear transformation** is a mapping $\phi : V \to W$ that preserves the underlying linear structure of the vector space. More formally, a transformation $\phi : V \to W$ is a linear transformation, if the following conditions hold $\forall \mathbf{x}, \mathbf{y} \in V$ and $\forall \lambda \in \mathbb{R}$:
$$
\begin{aligned}
\phi(\mathbf{x} + \mathbf{y}) &= \phi(\mathbf{x}) + \phi(\mathbf{y}) \\
\phi(\lambda \mathbf{x}) &= \lambda \phi(\mathbf{x}) \\
\phi(\mathbf{0}) &= \mathbf{0}
\end{aligned}
$$
Any $\mathbf{x} \in V$ can be represented as a unique linear combination with respect to an ordered basis $B$. Then, the coefficients $\alpha_1, \dots, \alpha_n$ are the **coordinates** and $\begin{bmatrix}\alpha_1 & \cdots & \alpha_n\end{bmatrix}^\intercal$ is the coordinate vector of $\mathbf{x}$ with respect to $B$.
$$
\mathbf{x} = \alpha_1 \mathbf{b}_1 + \cdots + \alpha_n \mathbf{b}_n
$$
A basis effectively defines a coordinate system. The familiar Cartesian coordinate system in two dimensions is spanned by the canonical basis vectors $\begin{bmatrix}1 & 0\end{bmatrix}^\intercal$ and $\begin{bmatrix}0 & 1\end{bmatrix}^\intercal$. However, any basis defines a valid coordinate system and the same vector may have a different coordinate representation in a different basis.

A linear transformation takes a vector from a vector space $V$ and transforms it into a new vector in another vector space $W$. Therefore, a **transformation matrix** can be used to map the coordinates with respect to an ordered basis in $V$ to coordinates with respect to an ordered basis in $W$.

If $[\mathbf{x}]_B$ is the coordinate of $\mathbf{x} \in V$ with respect to $B$, $[\mathbf{y}]_C$ is the coordinate vector of $\mathbf{y} \in W$ with respect to $C$, and $\mathbf{A}_\phi$ is the transformation matrix of $\phi$, then:
$$
[\mathbf{y}]_C = \mathbf{A}_\phi [\mathbf{x}]_B
$$
The columns of a transformation matrix $\mathbf{A}_\phi$ are the coordinates of $\phi(\mathbf{b}_j)$ with respect to $C$.
$$
\begin{aligned}
\mathbf{A}_\phi &= [\phi(\mathbf{b}_1) | \cdots | \phi(\mathbf{b}_n)] \\
\mathbf{A}_\phi &=
\begin{bmatrix}
\alpha_{11} & \cdots & \alpha_{1n} \\
\vdots & & \vdots \\
\alpha_{m1} & \cdots & \alpha_{mn} \\
\end{bmatrix}
\end{aligned}
$$
Most common geometric transformations that keep the origin fixed are linear, including rotation, scaling, shearing, reflection, and orthogonal projection. In two dimensions, linear transformations can be represented using a $2 \times 2$ transformation matrix.

| Geometric Transformation | Transformation Matrix |
| - | - |
| Stretch by a factor $k$ along x-axis | $\begin{bmatrix}k & 0\\0 & 1\end{bmatrix}$ |
| Stretch by a factor $k$ along y-axis | $\begin{bmatrix}1 & 0\\0 & k\end{bmatrix}$ |
| Rotation by an angle $\theta$ counterclockwise | $\begin{bmatrix}\cos{\theta} & -\sin{\theta} \\ \sin{\theta} & \cos{\theta}\end{bmatrix}$ |
| Rotation by an angle $\theta$ clockwise | $\begin{bmatrix}\cos{\theta} & \sin{\theta} \\ -\sin{\theta} & \cos{\theta}\end{bmatrix}$ |
| Shear by a factor $k$ parallel to x-axis | $\begin{bmatrix}1 & k\\0 & 1\end{bmatrix}$ |
| Stretch by a factor $k$ parallel to y-axis | $\begin{bmatrix}1 & 0\\k & 1\end{bmatrix}$ |

For the same vector space $V$, a vector can be represented in the coordinate system of another basis. This change of basis is described by a transformation matrix $\mathbf{S}$ that transforms the coordinate vector of $\mathbf{x}$ with respect to the basis $B$ to the coordinate vector of $\mathbf{x}$ with respect to the basis $C$.
$$
\begin{aligned}
\left[\mathbf{x}\right]_C &= \mathbf{S} \left[\mathbf{x}\right]_B \\
\left[\mathbf{x}\right]_B &= \mathbf{S}^{-1} \left[\mathbf{x}\right]_C
\end{aligned}
$$
The transformation matrix of a linear mapping $\phi : V \to W$ changes if the bases in $V$ and $W$ are changed. If the basis of $V$ changes from $B$ to $\tilde{B}$ and the basis of $W$ changes from $C$ to $\tilde{C}$, the corresponding transformation matrix $\tilde{\mathbf{A}}_\phi$ is given as:
$$
\tilde{\mathbf{A}}_\phi = \mathbf{T}^{-1} \mathbf{A}_\phi \mathbf{S}
$$
where $\mathbf{S}$ is the transformation matrix for the change of basis from $\tilde{B}$ to $B$, and $\mathbf{T}$ is the transformation matrix for the change of basis from $\tilde{C}$ to $C$. An intuition can be developed by informally expressing the transformations just in terms of bases:
$$
\tilde{B} \to \tilde{C} = \tilde{B} \to B \to C \to \tilde{C}
$$
