The location of a distribution is the measure of its central tendency. The central tendency of a distribution is typically contrasted with its dispersion. Analysis may judge whether data has a strong or weak central tendency based on its dispersion.

## Arithmetic Mean
The arithmetic mean is the sum of the numerical values of each observation divided by the total number of observations.
$$
\bar{x} = \dfrac{1}{n} (\sum^n_{i=1}x_i) = \dfrac{x_1 + x_2 + \dots + x_n}{n}
$$
When the data distribution is symmetrical, the mean and the median are equal. However, when the data distribution is skewed, the mean and the median are different, because the arithmetic mean is greatly influenced by outliers.

## Geometric Mean
The geometric mean is defined as the $n$th root of the product of $n$ numbers, or equivalently as the arithmetic mean in logscale.
$$
G_x = (\prod^n_{i=1}x_i)^\frac{1}{n} = \sqrt[n]{x_1 x_2 \dots x_n} = \exp(\dfrac{1}{n} \sum^n_{i=1} \ln x_i)
$$
The geometric mean is preferred for describing proportional growth, both exponential growth and varying growth, as well as metrics that are intended to be multiplied together. However, the geometric mean can be an unreliable measure of central tendency when one or more values are extremely close to zero in comparison to other values.

## Harmonic Mean
The harmonic mean is defined as the reciprocal of the arithmetic mean of reciprocals.
$$
H_x = \dfrac{n}{\sum^n_{i=1}\dfrac{1}{x_i}} = \dfrac{n}{\dfrac{1}{x_1}+\dfrac{1}{x_2}+\dots+\dfrac{1}{x_n}}
$$
Metrics that are inversely proportional to time, as well as ratios, should be averaged using the harmonic mean. However, since the harmonic mean tends strongly towards the least element of the list, it tends to mitigate the impact of large outliers and aggravate the impact of small ones.

## Median
The median is the value such that half of the population is less than this value and half is greater than this value.
$$
\mathrm{med}(x) = \begin{cases}
x_{(n+1)/2} & \text{if $n$ is odd} \\
\dfrac{x_{n/2} + x_{(n/2)+1}}{2} & \text{if $n$ is even} \\
\end{cases}
$$
Median is the preferred measure of central tendency when there are some extreme values, or there are some missing or undetermined values, or when there is an open-ended distribution, or when the data is measured on an ordinal scale.

## Mode
The mode is the value that appears the most in a set of data values. When the distribution has multiple local maxima, it is common to consider all of them as modes. Such a distribution is called multimodal, as opposed to unimodal. It is the preferred measure of central tendency when the data is measured in a nominal scale.
