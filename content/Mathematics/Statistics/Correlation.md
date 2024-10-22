Correlation is a statistical measure that expresses the extent to which two variables are linearly related. It is measured by a correlation coefficient, which is a dimensionless quantity that takes a value in the range $-1$ to $+1$.

If the coefficient is a positive number, the variables are directly related, whereas, if the coefficient is a negative number, the variables are inversely related. A coefficient of $0$ implies no correlation.

| Size of Correlation |     Interpretation     |
| :-----------------: | :--------------------: |
|  $0.90$ to $1.00$   | Very high correlation  |
|  $0.70$ to $0.90$   |    High correlation    |
|  $0.50$ to $0.70$   |  Moderate correlation  |
|  $0.30$ to $0.50$   |    Low correlation     |
|  $0.00$ to $0.30$   | Negligible correlation |

The correlation coefficient reflects the strength and direction of a linear relationship, but not the slope of that relationship, nor many aspects of nonlinear relationships.

![[correlation.png | twitch | 512]]
 
 It is important to note that correlation does not imply causation. That means that while a relationship may be observed, it is impossible to say that one variable caused or affected the other variable.
 
## Pearson Correlation
The Pearson correlation coefficient measures the linear correlation between two variables. It is covariance of two variables divided by the product of their standard deviations.
$$
r = \dfrac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \sum^n_{i=1}(y_i - \bar{y})^2}}
$$
Pearson correlation is affected by outliers, which may exaggerate or dampen the strength of relationship, and is therefore inappropriate when any variable is not normally distributed.

The point biserial correlation is a special case of the Pearson correlation and is used for measuring the relationship between a continuous variable and a dichotomous variable.

## Spearman Correlation
Spearman rank correlation coefficient is a nonparametric measure of rank correlation, which is the dependence between the rankings of two variables. It makes no assumptions about the distribution of the data.
$$
r_s = 1 - \dfrac{6 \sum (R(x_i) - R(y_i))^2}{n(n^2 - 1)}
$$
The Spearman rank correlation is robust to outliers, unlike the Pearson correlation. It is appropriate when the variables are not normally distributed, or when the variables are measured on an ordinal scale.
