A large language model (LLM) is an advanced artificial intelligence system that specializes in processing, understanding, and generating human-like text. These systems are typically implemented as a deep neural network and are trained on massive amounts of text data.

A large language model is able to perform a variety of tasks such as machine translation, creative text generation, question answering, text summarization, and other reasoning and language oriented tasks.

Although foundational LLMs are often good enough out of the box, they can be adapted to achieve better performance on a specific set of tasks through a process called fine-tuning. Fine-tuning requires significantly less data and computational resources than training an LLM from scratch.

LLMs can be further guided towards the desired behavior by the discipline of prompt engineering, which is the process of composing the prompt and the parameters of an LLM to get the desired response.

## Language Models
A language model predicts the probability of a sequence of words. Commonly, when given a prefix of text, it assigns probabilities to subsequent words. A basic language model can be created by storing an n-gram table, while large language models are often based on transformers.

## Recurrent Neural Networks
Before transformers, recurrent neural networks (RNNs) such as long short-term memory (LSTM) and gated recurrent units (GRU) were the popular approach for modeling sequences. RNNs process input and output sequences sequentially. This sequential nature of RNNs makes them compute intensive and hard to parallelize.

## Transformers
The transformer architecture was proposed in the "Attention is all you need" paper in 2017 for use in machine translation. It is a sequence-to-sequence model capable of converting sequences from one domain into sequences in another domain.

The original transformer architecture consists of two parts: an encoder and a decoder. The encoder converts the input text into a representation, which is then passed to the decoder. The decoder uses this representation to generate the output text autoregressively.

## Decoder-Only Transformer
Modern LLMs use a decoder-only variant of transformer architecture. This approach focuses on directly generating the output sequence from the input. The input sequence undergoes a similar process of embedding and positional encoding before being fed into the decoder.

The decoder then uses these masked self-attention to generate predictions for each subsequent token based on the previously generated tokens. This approach simplifies the architecture for specific tasks where encoding and decoding can be effectively merged.

## Masked Self-Attention
Masked self-attention ensures that each position can only attend to earlier positions in the output sequence, preserving the autoregressive property. This is crucial for preventing the decoder from having access to future tokens in the output sequence.

