Dispersion or variability describes how far apart data points lie from each other and from the center of a distribution.

## Standard Deviation
The standard deviation is a measure of the spread of data about the mean, and is defined as the square root of the variance of a random variable. It is used as a measure of dispersion when mean is used as measure of central tendency.
$$
s = \sqrt{\dfrac{1}{n-1} \sum^n_{i=1}(x_i - \bar{x})^2}
$$
The use of $n-1$ instead of $n$ is called the Bessel's correction, and it corrects the bias in estimation of the population variance. However, note that the standard deviation is an inappropriate measure of dispersion for skewed data.

## Interquartile Range
The interquartile range is defined as the difference between the $75$-th and $25$-th percentiles of data. Hence the interquartile range describes the middle $50\%$ of observations. It is used as a measure of dispersion when median is used as measure of central tendency.
$$
\mathrm{IQR} = Q_3 - Q_1
$$
Interquartile range can be used even if the extreme values are not recorded exactly. Moreover, it is not affected by outliers. Interquartile range is used for ordinal and skewed numerical data.

## Average Absolute Deviation
The average absolute deviation is the average of the absolute deviations from a central point. Most commonly, the mean absolute deviation around the mean and the median absolute deviation around the median are used; both denoted by $\mathrm{MAD}$.

The mean absolute deviation around the mean is calculated as follows.
$$
\mathrm{MAD} = \dfrac{1}{n} \sum^n_{i=1} |x_i - \bar{x}|
$$
The median absolute deviation around the median is a robust measure of variability.
$$
\mathrm{MAD} = \mathrm{median}(|X_i - \mathrm{median}(X)|)
$$

## Coefficient of Variation
The coefficient of variation is a standardized measure of dispersion. It is defined as the ratio of the standard deviation to the mean, and is often expressed as a percentage.
$$
\mathrm{CV} = \dfrac{\sigma}{\mu}
$$
The coefficient of variation should only be calculated for data measured on ratio scales. It should be used instead of the standard deviation for comparison between datasets with different units or widely different means.
