The scaling laws for LLMs which were initially exposed by the Kaplan study continue to hold today. Language models have been consistently increasing in size and this has resulted in vast improvements in these model's quality and accuracy.

However, increasing the number of parameters have also increased the size of memory required to hold the model and computations needed to produce the model results. The speed of the connection between the model and compute is also critical, but usually hardware-constrained.

There are several inference acceleration techniques. Some optimization techniques can have an impact on the model's output, while others do not:
- **Output-approximating methods**: include quantization and distillation.
- **Output-preserving methods**: include flash attention, prefix caching, and speculative decoding.

## Trade-Offs
Optimizing LLM inference often involves trade-offs, such as balancing latency, quality, or cost, which can be tailored to specific use cases. These adjustments typically result in marginal sacrifices in one factor to achieve substantial improvements in another.

Some of these trade-offs are:
- **Quality vs latency trade-off**: It is possible to significantly improve the inference speed by accepting a marginal drop in the model's accuracy, through techniques such as using a smaller model or using quantization to decrease the precision of the model's parameters.
- **Latency vs cost trade-off**: Some use cases, such as bulk inference, prioritize cost over the latency of any particular request, while other use cases, such as chatbots, place much more importance on request latency.

## Quantization
Quantization is the process of decreasing the numerical precision of the model's parameters, in which weights and activations are stored. The default precision is usually 32-bit floating numbers, but with quantization, the precision can be dropped to 8 or even 4-bit integers.

Quantization has multiple performance benefits:
- It reduces the memory footprint of the model, allowing to fit larger models on the same hardware.
- In distributed inference setup where data needs to be transferred between different cores, it reduces the communication overhead, therefore improving latency.
- It enables faster arithmetic operations as some accelerators natively support faster matrix multiplications on lower precision representations.

Quantization can have a very insignificant impact on the quality depending on the use case and model. For example, one study found a $2 \times$ speed-up for a $2\%$ drop in accuracy for the face detection task on MobileNet SSD.

Quantization can be applied during inference or integrated into training through Quantization Aware Training. QAT is a more resilient approach as the model is able to recover some of the quantization-related quality losses during training.

## Distillation
Distillation improves the efficiency of LLM inference by training a smaller "student" model to replicate the performance of a larger "teacher" model. While smaller models are faster, they often show reduced quality compared to larger counterparts.

Distillation bridges this gap through techniques like:
- **Data distillation**: The larger model is used to generate high-quality synthetic data, which augments the training set for the smaller student model.
- **Knowledge distillation**: The output token distribution of the student is aligned to the output token distribution of the teacher.
- **On-poly distillation**: The teacher provides feedback on the student's generated sequences, in a reinforcement learning setup.

## Flash Attention


## Speculative Decoding
LLM inference involves two main stages: processing prompt tokens (prefill), followed by generating new tokens autoregressively (decode). The prompt provides the model's initial context and can be processed in parallel. However, the decode process is autoregressive and therefore inherently sequential.

Speculative decoding speeds up inference by using a small speculative model to quickly generate multiple potential future tokens, which can be verified by the LLM with a single forward pass. The LLM verifies the candidate tokens in parallel, and accepts them if they align with its own output.

If verification fails partway, any tokens up to the first discrepancy are accepted, while the remaining tokens are discarded. Generation is then advanced by the number of accepted tokens.

For example, assume that the forward of an LLM is 10ms and that of the SSM is just 1ms. Given a prompt: "The quick brown fox", the SSM might generate the tokens: "jumped", "over", "the", "lazy", and "dog". The LLM then verifies these tokens in a single pass, and accepts them.

If the LLM would have generated these tokens autoregressively, it would have took 50ms ($5 \times 10$) to generate the response. However, with speculative decoding, it only took 15ms ($5 \times 1 + 10$) to generate the response.
