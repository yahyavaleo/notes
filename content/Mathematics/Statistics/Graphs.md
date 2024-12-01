The five most commonly used graphs: bar charts, histograms, scatter plots, pie charts, and box plots are described below, along with when to use them and common pitfalls.

## Bar Chart
A bar chart is used to plot the numerical value of a categorical variable. This information is plotted as bars, where the length of each bar is proportional to the value it represents.

A bar chart is used when you want to show the comparison of metric values across different subgroups of your data.

![[barchart.png | twitch]]

A few things to keep in mind:
- Use a common zero-valued baseline: This maintains the truthfulness of data, since otherwise the ratio in bar lengths will not match the ratio in actual bar values.
- Order the categories from highest to lowest: Unless there is some natural ordering of the categories, ordering them from highest to lowest allows the reader to make comparisons easily.

## Histogram
A histogram is used to plot the distribution of a single numerical variable. The data is divided into intervals (called bins), and the frequency of data points within each bin is represented by the height of the bar.

A histogram is used when you want to understand the distribution, spread, or shape of a numerical variable.

![[histogram.png | twitch]]

A few things to keep in mind:
- Choose an appropriate number of bins: Too many bins will make the plot noisy and hard to interpret, while too few bins will oversimplify the data.
- Use relative frequencies when comparing datasets: When comparing two or more histograms, using relative frequencies ensures the distributions are comparable, even if the sample sizes are different.

## Scatter Plot
A scatter plot is used to visualize the relationship between two numerical variables. Each point on the scatter plot represents an observation in the dataset, with one variable on the horizontal axis and the other on the vertical axis.

A scatter plot is used when you want to see if there is a correlation or relationship between two numerical variables.

![[scatterplot.png | twitch]]

A few things to keep in mind:
- Use a trend line to identify patterns: Adding a trend line (like a linear regression line) can help visualize the overall direction of the relationship between the variables.
- Handle overplotting: If you have too many points, the plot can become cluttered. Use transparency (alpha) or binning techniques to reduce overplotting.

## Pie Chart
A pie chart shows how a total amount is divided between levels of a categorical variable. This information is plotted as a circle divided into radial slices, where the arc length of each slice is proportional to the value it represents.

A pie chart is used when you want to compare each group's contribution to the whole, rather than comparing groups to each other.

![[piechart.png | twitch]]

A few things to keep in mind:
- Include annotations: It is very hard for a reader to discern exact proportions except when the fraction is $1/2$, $1/3$, or $1/4$. Therefore annotations in the format of percentages such as $43\%$ is a standard inclusion for pie charts.
- Limit the number of pie slices: In a pie chart with large number of slices, it can difficult to see the smallest slices. It is common to combine the smaller slices into a single "other" slice.

## Box Plot
A box plot shows the distribution of numerical data values using five-number summary: the minimum, the maximum, the median, and the first and third quartiles. This provides an overview of the data's symmetry, skew, variance, and outliers.

A box plot is used when you want to compare the data distribution between multiple groups.

![[boxplot.png | twitch]]

A few things to keep in mind:
- Compare multiple groups: Since a box plot provides only a high-level summary of the data, when there is only one group, a more detailed graph such as a histogram should be used.
- Consider orientation: The horizontal orientation is useful when there are a lot of groups to plot or if the group names are long. The vertical orientation is a more natural format when the grouping variable is based on units of time.
