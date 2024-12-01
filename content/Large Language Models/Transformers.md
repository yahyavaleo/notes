The transformer architecture was proposed in the "Attention is all you need" paper in 2017 for use in machine translation. It is a sequence-to-sequence model capable of converting sequences from one domain into sequences in another domain.

![[original-transformer.png | twitch | 512]]

The original transformer architecture consists of two parts: an encoder and a decoder. The encoder converts the input text into a representation, which is then passed to the decoder. The decoder uses this representation to generate the output text autoregressively.

## Input Preparation
To prepare a language input for a transformer, the input sequence is converted into tokens, and then into input embeddings, which is a high-dimensional array that represents the meaning of each token in the sentence. This embedding is then fed into the transformer for processing.

Generating an input embedding involves the following steps:
1. **Normalization**: Standardizes text by removing redundant whitespace, accents, and so on.
2. **Tokenization**: Breaks the sentence into words or subwords and maps them to integer token IDs from a vocabulary.
3. **Embedding**: Converts each token ID to its corresponding high-dimensional vector, typically using a lookup table. These can be learned during the training phase.
4. **Positional encoding**: Adds information about the position of each token in the sequence to help the transformer understand word order.

## Multi-Head Attention
The embedding vectors are then fed into the multi-head attention module. Self-attention enables a transformer to focus on specific parts of the input sequence relevant to the current task and to capture long-range dependencies within sequences more effectively than traditional RNNs.

Self-attention discovers the context through the following steps:
1. **Creating queries, key, and values**: Each input embedding is multiplied by three learned weight matrices ($W_q$, $W_k$, $W_v$) to generate a query, a key, and a value. These are specialized representations of each word.
	- **Query**: The query helps the model ask: "Which other words in the sequence are relevant to me?".
	- **Key**: The key is a label that helps the model identify how a word might be relevant to other words in the sequence.
	- **Value**: The value holds the actual word content information.
2. **Calculating scores**: Scores are calculated to determine how much attention should each word give to other words. This is done by taking the dot product of the query vector of one word with the key vectors of all the words in the sequence.
3. **Normalization**: The scores are divided by the square root of the dimension of the key vector ($d_k$) for stability, then passed through a softmax function to obtain attention weights. These weights indicate how strongly each word is connected to the others.
4. **Weighted values**: Each value vector is multiplied by its corresponding attention weight. The results are summed up, producing a context-aware representation for each word.

In practice, these computations are performed simultaneously, by stacking the query, key, and value vectors for all the tokens into $Q$, $K$, and $V$ matrices to product the attention matrix, $Z$.

![[attention-equation.png | twitch | 512]]

Multi-head attention employs multiple sets of the $Q$, $K$, and $V$ weight matrices. These run in parallel, with each head potentially focusing on different aspects of the input relationships. The outputs from each head are concatenated and linearly transformed, giving the model a richer representation of the input sequence.

Each transformer block (consisting of a multi-head attention module and a feedforward layer) applies layer normalization and residual connections to the outputs of both the multi-head attention module and the feedforward layer.

## Layer Normalization
Layer normalization computes the mean and variance of the activations to normalize the activations in a given layer. This is typically performed to reduce covariant shift as well as improve gradient flow to yield faster convergence during training as well as improved overall performance.

## Residual Connections
Residual connections propagate the inputs to the output of one or more layers. This has the effect of making the optimization procedure easier to learn and also help deal with vanishing and exploding gradients.

## Feedforward Layer
The output of the multi-head attention module and the subsequent "Add and Norm" layer is fed into the feedforward layer of each transformer block. This layer applies a position-wise transformation to the data.

The feedforward layer typically consists of two linear transformations with a non-linear activation function, such as ReLU or GeLU, in between.This allows the incorporation of additional non-linearity and complexity into the model's representations.

## Encoder and Decoder
The original transformer architecture relies on a combination of encoder and decoder modules. Each encoder and decoder consists of a series of layers, with each layer comprising key components: a multi-head self-attention mechanism, a point-wise feedforward network, normalization layers, and residual connections.

The encoder's primary function is to process the input sequence into a continuous representation that holds contextual information for each token:
- The input sequence is first normalized, tokenized, and converted into embeddings.
- Positional encodings are added to these embeddings to retain sequence order information.
- The encoder output is a series of embedding vectors $Z$ representing the entire input sequence.

The decoder generates an output sequence based on the context-provided by the encoder's output $Z$. It operates in a token-by-token fashion, beginning with a start-of-sequence token. This iterative process continues until the decoder predicts an end-of-sequence, thereby completing the output.

## Training Transformers
The aforementioned process is how a transformer generates outputs during inference. For training the transformer, first data preparation is done using the following steps:
1. **Data cleaning**: The data is cleaning using techniques such as filtering, deduplication, and normalization.
2. **Tokenization**: The data is converted into tokens through techniques such as byte-pair encoding and unigram tokenization. Tokenization generates a vocabulary of unique tokens for use by the model.
3. **Data splitting**: The data is split into a training and a testing dataset.

The training loop of a transformer consists of the following steps:
1. **Batch processing**: Batches of input sequences are sampled from the training dataset, along with corresponding target sequences.
2. **Forward pass**: A batch of input sequences is fed into the transformer. The transformer generates predicted output sequences.
3. **Loss calculation**: The predicted sequence is compared with the target sequence using a loss function (usually the cross-entropy loss).
4. **Backpropagation**: The gradients of the loss with respect to the transformer's parameters is calculated using backpropagation.
5. **Optimization**: An optimizer updates the transformer's parameters based on the calculated gradients.
6. **Repeat**: This process is repeated until the transformer converges to a certain level of performance or until it has been trained on a pre-specified number of tokens.

There are different approaches to formulating the training task for transformers depending on the architecture used:
- **Decoder-only** models are typically pre-trained on the language modeling task, in which case, the target sequence is simply a shifted version of the input sequence. For example, given a training sequence: "the cat sat on the mat", the input sequence could be: "the cat sat on the", and the target sequence would be: "mat".
- **Encoder-only** models (such as BERT) are often pre-trained on the masked language modeling task, in which case, the target sequence is a masked versions of the input sequence. For example, given a training sequence: "the cat sat on the mat", the input sequence could be: "the (mask) sat on the mat", and the target sequence would be the original sentence.
- **Encoder-decoder** models (such as the original transformer) are trained on sequence-to-sequence supervised tasks such as translation, question-answering, and summarization. These models could also be trained in an unsupervised way by converting other tasks into sequence-to-sequence format. For example, when training on Wikipedia, the input sequence could be the first part of an article, and the target sequence would be the rest of the article.

An important factor to consider during training is the context length. Longer context lengths allow to capture more complex relationships within the text, potentially leading to better performance. However, longer context lengths require more computational resources and memory, which can slow down training and inference.
