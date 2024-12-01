Sampling techniques determine the way in which output tokens are chosen and influence the correctness, creativity, and diversity of the resulting output. A variety of sampling techniques can be employed to determine how the model chooses the next token in a sequence.

## Greedy Search
Greedy search selects the token with the highest probability at each step. For tokens "cat" and "dog" with probabilities $0.7$ and $0.3$, the model will always select the token "cat". This is the simplest option but can lead to repetitive and predictable outputs.

## Random Sampling
Random sampling selects the next token according to a probability distribution, where each token is sampled proportionally to its predicted probability. For tokens "cat" and "dog" with probabilities $0.7$ and $0.3$, cat has a $70\%$ chance of being sampled. This can produce more creative text but has a higher chance of nonsensical output.

## Temperature Sampling
Temperature sampling adjusts the probability distribution by a temperature parameter. Higher temperature promotes creativity while lower temperatures favor high-probability tokens.

## Top-K Sampling
Top-$K$ sampling randomly samples from the top $K$ most probable tokens. The value of $K$ controls the degree of randomness.

## Top-P Sampling
Top-$P$ sampling (nucleus sampling) samples from a subset of tokens whose cumulative probability adds up to $P$. This allows the model to adapt the number of potential candidates depending on its confidence, favoring more diversity when uncertain and focusing on a smaller set of highly probable words when confident.

## Best-of-N Sampling
Best-of-$N$ sampling generates $N$ separate responses and selects the one deemed best according to a predetermined metric, such as a reward model or a logical consistency check. This is particularly useful for short snippets or situations where logic and reasoning are important.
