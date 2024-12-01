## GPT-1
GPT-1 (Generative Pre-trained Transformer 1) was a decoder-only model developed by OpenAI in 2018. It was trained on the BooksCorpus dataset (containing approximately several billion words) and was able to generate text, translate languages, write creative content, and answer questions.

The main innovations in GPT-1 were unsupervised pre-training and task-aware input transformations. The prior approach of supervised training has two main limitations:
- It required a large amount of labeled data, which is expensive and time-consuming to collect.
- The model could only generalize to tasks that are similar to the tasks it was trained on.

Unsupervised pre-training addresses these limitations by training the model on a large corpus of unlabeled data. Then, supervised data is used to fine-tune the model for a specific task. This allows to train language models that are more accurate and generalizable.

There are different types of tasks that require a specific structure, for example, textual entailment requires a premise and a hypothesis, and question-answering requires a context document, a question, and possible answers.

GPT-1 converted these types of tasks which required structured inputs into an input that the language model can parse, without requiring task-specific architectures on top of the pre-trained architecture.

For textual entailment, the premise $p$ and the hypothesis $h$ were concatenated with a delimiter token ($\$$) in between, $[p, \$, h]$. For question-answering, the context document $c$ is concatenated with the question $q$ and a possible answer $a$ with a delimiter token in between, $[c, q, \$, a]$.

Although GPT-1 was a significant breakthrough in natural language processing, it had some limitations:
- The model was prone to generating repetitive texts, especially when given prompts outside the scope of its training data.
- It failed to reason over multiple turns of dialogue and could not track long-term dependencies in text.
- It cohesion and fluency were limited to shorter text sequences.

## BERT
BERT (Bidirectional Encoder Representations from Transformers) used an encoder-only architecture unlike the original encoder-decoder transformer. Instead of translating or producing sequences, BERT focuses on understanding context deeply by training on a masked language model objective.

In MLM, random words in a sentence are replaced with a mask token, and BERT tries to predict the original word based on the surrounding text. Another innovation in BERT was the next sentence prediction loss, where it learns to determine whether a given sentence logically follows from a preceding one.

By training on these objectives, BERT captures intricate contextual dependencies from both the left and right of a word (hence the name includes "bidirectional"), and it can discern relationships between pairs of sentences.

This makes BERT especially good for tasks that require natural language understanding, such as question-answering, sentiment analysis, and inference. However, BERT is an encoder-only model, so it can not generate text. Instead it produces contextual embeddings of the input text.

## GPT-2
GPT-2 is the successor to GPT-1, and was released in 2019 by OpenAI. The main innovation of GPT-2 was a direct scale-up, with a tenfold increase in both its parameter count and the size of its training data.

Instead of the BooksCorpus dataset (5 GB in size), GPT-2 was trained on the WebText dataset (40 GB) which is consists of 45 million webpages from Reddit with a Karma rating of at least three.

Moreover, GPT-2 had 1.5 billion parameters (compared to the 117M in GPT-1). The authors trained four models with 117M, 345M, 762M, and 1.5B parameters, and found that the model with the most parameters performed better on every subsequent task.

This scaling up resulted in a model that was able to generate more coherent and realistic text than GPT-1. Specifically, GPT-2 demonstrated significant improvement in capturing long-range dependencies and reasoning. While it performed well in some tasks, it did not outperform state-of-the-art reading comprehension, summarization, and translation. 

The most significant achievement of GPT-2 was its ability to perform zero-shot learning on a variety of tasks. Zero-shot task transfer is the ability of a model to generalize to a new task without being trained on it, requiring the model to understand the based on given instructions.

The study discovered that the performance on zero-shot tasks increased in a log-linear manner as the model's parameters increased.

## GPT-3
GPT-3 is a 175 billion parameter language model and is a significant improvement of its predecessor, GPT-2, primarily in terms of scale, capabilities, and flexibility. This increase in model size allowed the model to remember a vast amount of information, understand nuanced instructions, and generate more coherent and contextually relevant text over longer passages.

While GPT-2 could be fine-tuned on specific tasks with additional training data, GPT-3 could perform tasks with few-shot learning or even zero-shot learning.

## InstructGPT
Instruction tuning was then introduced with InstructGPT. It was a version of GPT-3 that was fine-tuned using supervised fine-tuning on a dataset of human demonstrations of desired model behaviors. The outputs from the model were then ranked by human evaluators, and it was then further fine-tuned using reinforcement learning with human feedback.

This led to improved instruction following in the model. A 1.3B parameter InstructGPT had better human evaluations than the 175B parameter GPT-3. It also showed improvements in truthfulness and reductions in toxicity.

## GPT-3.5
GPT-3.5, including GPT-3.5 turbo, was an improvement over GPT-3 as it was capable of understanding and generating code. It was optimized for dialogue, and it could handle context windows of up to 16,385 tokens and could generate outputs of up to 4,096 tokens.

## GPT-4
GPT-4 extends GPT-3.5 as a large multimodal model capable of processing image and text inputs and producing text outputs. This model has broader general knowledge and advanced reasoning capabilities. It can handle context windows of up to 128,000 tokens and has a maximum output of 4,096 tokens.

GPT-4 demonstrates remarkable versatility by solving complex tasks across diverse fields like mathematics, coding, vision, medicine, law, and psychology, without specialized instructions. Its performances matches or even exceeds human capabilities and significantly outperforms earlier models like GPT-3.5.

## LaMDA
Google's LaMDA (Large Model for Dialogue Applications) was engineered to handle a wide array of topics, unlike traditional chatbots which operate in more constrained and predefined domains, delivering a more natural and flowing conversations.

LaMDA was trained on dialogue-focused data to encourage ongoing conversational flow, rather than isolated responses, ensuring users can have a more extensive and explorative dialogue.

While GPT models shined on their ability to produce coherent long-form content and perform various tasks with minimal prompting, LaMDA emphasizes the flow and progression of dialogue, striving to mimic the unpredictability and richness of human conversations.

## Gopher
Gopher is 280 billion parameter language model based on the decoder-only transformer architecture, developed by DeepMind in 2021. It can generate text, translate languages, write different kinds of creative content, and answer questions in an informative way.

Similar to GPT-3, Gopher focused on improving dataset quality and optimization techniques:
- **Dataset**: The researchers curated a high-quality dataset called MassiveText, which contains over 10 terabytes of data and 2.45B documents from webpages, books, news, articles, and code (from GitHub). They only trained on 300B tokens ($12\%$ of the dataset). They also improved the quality of the data by filtering it, such as removing duplicate text and deduplicating similar documents.
- **Optimization**: The researchers used a warmup learning rate for 1500 steps and then decayed it using a cosine schedule. They also had an interesting rule that as they increased the model size, they decreased the learning rate and increased the number of tokens in each batch. Additionally, they found that clipping gradients to be a maximum of 1 based on the global gradient norm helped stabilize the training.

Gopher was evaluated on a variety of tasks, including mathematics, common sense, logical reasoning, general knowledge, scientific understanding, ethics, and reading comprehension. Gopher outperformed previous state-of-the-art models on $81\%$ of the tasks.

Specifically, Gopher performed well on knowledge-intensive tasks but struggled on reasoning-heavy tasks such as abstract algebra. The authors also conducted a study on the effect of model size on different types of tasks.

![[gopher-ablation-study.png | twitch]]

The authors found that increasing the number of parameters had a significant impact on logical reasoning and reading comprehension, but it did not significantly improve performance on tasks such as general knowledge, where performance almost plateaued.

## GLaM
GLaM (Generalist Language Model) was the first sparsely-activated mixture-of-experts language model. Mixture-of-experts based models are much more computationally efficient given their parameter count. This is achieved by only activating a subset of their parameters (experts) for each input token.

GLaM consists of 1.2 trillion parameters but uses only one-third of the energy used to train GPT-3 and half of the FLOPs for inference while achieving better overall performance compared to GPT-3.

## Chinchilla
Until 2022, LLMs were primarily scaled by increasing the model size and using datasets that are relatively small by current standards (up to 300 billion tokens for the largest models). This approach was informed by the "Scaling laws for neural language models" paper.

![[chinchilla-paper.png | twitch | 512 ]]

The authors examined how performance of a language model, measured by cross-entropy loss, varies with changes in computational budget, model size, and dataset size. Specifically, given a 100-fold increase in computational resources ($C$), the authors recommended scaling the model size by approximately 28.8 times ($N_\text{opt} \propto C^{0.73}$), while increasing the dataset size by only 3.5 times ($D_\text{opt} \propto C^{0.27}$).

To verify the updated scaling law, DeepMind trained a 70B parameter model called Chinchilla using the same compute budget as the previously trained Gopher model. Chinchilla uniformly and significantly outperformed Gopher (280B), GPT-3 (175B), and Megatron-Turing NLG (530B) on a large range of downstream evaluation tasks.

The findings of Chinchilla had significant ramifications for the development of future LLMs. Focus shifted into finding ways to scale dataset size (while maintaining quality) alongside increasing parameter count.

## PaLM
PaLM (Pathways Language Model) is a 540 billion parameter transformer-based large language model developed by Google AI. It was trained on a massive dataset of text and code, and is capable of performing a wide range of tasks, including common sense reasoning, arithmetic reasoning, joke explanation, code generation, and translation.

At the time of its release, PaLM was also able to achieve state-of-the-art performance on many language benchmarks, for example GLUE and SuperGLUE.

One of the key features of PaLM is its ability to scale efficiently, because of its Pathways system, which Google developed to distribute the training of large language models across two TPU v4 Pods.

## PaLM 2
PaLM 2 is a successor of PaLM that was announced in May 2023. It is even more capable than PaLM, with fewer parameters, due to a number of architectural and training enhancements. It excels at advanced reasoning tasks, including code generation, math, classification, question answering, and translation.

## Gemini
Gemini is a multimodal language model that can take take interleaved sequences of text, image, audio, and video as input, and can support context lengths of up to 2 million tokens. It employs mechanisms such as multi-query attention and Mixture of Experts architecture for efficiency.

![[gemini-diagram.png]]

Gemini 1.5 Pro demonstrates remarkable capabilities across different domains:
- Code understanding: It can process massive codebases and answer highly specific code-related questions.
- Language learning: The model can learn new languages, never observed at training, solely based on reference material provided within its input.
- Multimodal reasoning: It understands both images and text.
- Video comprehension: It can analyze entire movies, answering detailed questions and pinpointing specific timestamps with remarkable accuracy.

Gemini Flash is the fastest Gemini model served in the API. It is optimized for high volume, high frequency tasks at scale, is more cost efficient to serve and features a breakthrough long context window of 1 million tokens.

## LLaMA 2
LLaMA 2 (Large Language Model Meta AI 2) is a family of pre-trained and fine-tuned LLMs ranging from 7B to 70B parameters, released by Meta AI. It shows significant improvements over its predecessor LLaMA 1, including a $40\%$ larger pre-training dataset (2 trillion tokens), doubled context length (4096 tokens), and the use of grouped-query attention.

## LLaMA 3.2
LLaMA 3.2 includes multilingual text-only models (1B, 3B) and vision LLMs (11B, 90B), with quantized versions of 1B and 3B parameters offering on average up to $56\%$ smaller size and $2$ to $3\times$ speedup, ideal for on-device and edge deployments. LLaMA 3.2 utilizes grouped-query attention and a 128K token vocabulary.

## Mixtral
Mixtral 8x7B is a sparse mixture-of-experts (SMoE) model developed by Mistral AI. While its total parameter count is 47B, it utilizes only 13B active parameters per token during inference, leading to faster inference and higher throughput.

This model excels at mathematics, code generation, and multilingual tasks, often outperforming LLaMA 2 70B in these domains. Mixtral also supports a 32K token context length. Its instruction-tuned version, Mixtral 8x7B Instruct, surpasses several closed-source models on human evaluation benchmarks.

## Qwen 1.5
Qwen 1.5 is an LLM series from Alibaba that comes in six sizes: 0.5B, 1.8B, 4B, 7B, 14B, and 72B. Qwen 1.5 models uniformly support a context length of up to 32K tokens. Qwen 1.5-72B outperforms LLaMA-70B on all evaluated benchmarks.

## Yi
Yi is a family models created by 0.1 AI, and includes 6B and 34B base models pre-trained on a massive 3.1 trillion token English and Chinese dataset. Yi emphasizes data quality through rigorous cleaning and filtering operations.

The 34B model achieves comparable performance to GPT-3.5 on many benchmarks and can be efficiently served on consumer-grade GPUs with 4-bit quantization. Yi also offers extensions like a 200K context model, a vision-language model (Yi-VL), and a depth-upscaled 9B model.

## Grok-1
Grok-1 is a 314B parameter mixture-of-experts model developed by xAI, with a context length of 8K tokens. It uses only $25\%$ of the weights for a given token. It is a raw base model checkpoint from the pre-training phase and is not fine-tuned for specific tasks like dialogue.

## Comparison
The table below shows how transformer-based large language models evolved from encoder-decoder architectures with hundreds of millions of parameters trained on hundreds of millions of tokens, to decoder-only architectures with billions of parameters and trained on trillions of tokens.

| Model                      | Attention (2017) | GPT (2018)     | GPT-2 (2019)    | GPT-3 (2020)     | LaMDA (2021)    | Gopher (2021)    | Chinchilla (2022) |
| -------------------------- | ---------------- | -------------- | --------------- | ---------------- | --------------- | ---------------- | ----------------- |
| **Optimizer**              | Adam             | Adam           | Adam            | Adam             | Adam            | Adam             | Adam-W            |
| **Parameters**             | $213M$           | $117M$         | $1.5B$          | $175B$           | $137B$          | $280B$           | $70B$             |
| **Vocab size**             | $\sim 37K$       | $\sim 40K$     | $\sim 50K$      | $\sim 50K$       | $\sim 32K$      | $\sim 32K$       | $\sim 32K$        |
| **Embedding dimension**    | $1024$           | $768$          | $1600$          | $12288$          | $8192$          | $16384$          | $8192$            |
| **Key dimension**          | $64$             | $64$           | $64$            | $128$            | $128$           | $128$            | $128$             |
| **Heads**                  | $16$             | $12$           | $25$            | $96$             | $128$           | $128$            | $64$              |
| **Encoder layers**         | $6$              | N/A            | N/A             | N/A              | N/A             | N/A              | N/A               |
| **Decoder layers**         | $6$              | $12$           | $48$            | $96$             | $64$            | $80$             | $80$              |
| **Feed forward dimension** | $4 \times 1024$  | $4 \times 768$ | $4 \times 1600$ | $4 \times 12288$ | $8 \times 8192$ | $4 \times 16384$ | $4 \times 8192$   |
| **Context Token Size**     | N/A              | $512$          | $1024$          | $2048$           | N/A             | $2048$           | $2048$            |
| **Pre-training tokens**    | $\sim 160M$      | $\sim 1.25B$   | $\sim 10B$      | $\sim 300B$      | $\sim 168B$     | $\sim 300B$      | $\sim 1.4T$       |
