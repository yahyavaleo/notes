The shape of a distribution is characterized by the behavior of its tails, and is described through skewness and kurtosis.

## Skewness
Skewness is a measure of the asymmetry in a distribution about its mean. A positive skew indicates that the right tail is longer, while a negative skew indicates that the left tail is longer. Skewness therefore indicates the direction of outliers.
$$
G_1 = \dfrac{\sqrt{N(N-1)}}{N-2} \dfrac{\dfrac{1}{N} \sum^N_{i=1} (X_i - \bar{X})^3}{s^3}
$$
Skewness is often measured by the adjusted Fisher-Pearson coefficient of skewness. The adjustment approaches 1 as $N$ gets larger. If a normal distribution is desired, the skewed variable can be transformed by taking logarithm.

## Kurtosis
Kurtosis is a measure of the tailedness of a distribution, that is, whether a distribution is heavy-tailed or light-tailed compared to a normal distribution. Positive kurtosis indicates a heavy tail or abundance of outliers, while negative kurtosis indicates a light tail or lack of outliers.
$$
\mathrm{Kurt}[X] = \dfrac{\dfrac{1}{N} \sum^N_{i=1} (X_i - \bar{X})^4}{s^4}
$$
The standard normal distribution has a kurtosis of 3. For this reason, sometimes 3 is subtracted from the kurtosis, and this value is called excess kurtosis.
