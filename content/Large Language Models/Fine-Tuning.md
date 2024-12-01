Large language models typically undergo multiple training stages. The first stage, often referred to as pre-training, is the foundational stage where an LLM is trained on large, diverse, and unlabeled text datasets where its objective is to predict the next token given the previous context.

The resulting LLM demonstrates a reasonable level of language understanding and generation abilities across a variety of different tasks, tested through zero-shot or few-shot prompting. After pre-training, the model can be further specialized through fine-tuning, typically called supervised fine-tuning.

The following are some examples of behaviors that can be improved using fine-tuning:
- **Instruction tuning**: The LLM is provided an instruction to follow as input, which might include summarizing text, writing code, or writing a poem in a certain style.
- **Dialogue tuning**: The LLM is fine-tuned on conversational data in the form of questions and responses. This is often called multi-turn dialogue.
- **Safety tuning**: This is crucial for mitigating risks associated with bias, discrimination, and toxic outputs. It involves a multi-pronged approach encompassing careful data selection, human-in-the-loop validation, and incorporating safety guardrails. Techniques like reinforcement learning with human feedback enable the LLM to prioritize safe and ethical responses.

## Supervised Fine-Tuning
Supervised fine-tuning (SFT) is the process of improving the performance of an LLM on a specific set of tasks by further training it on domain-specific, labeled data. This dataset is typically significantly smaller than the pre-training dataset, and is usually human-curated and of high quality.

In this setting, each data point consists of an input (prompt) and a demonstration (target response). For example, questions can be the prompt and answers will be the target response.

It is important to note that fine-tuning can also be used to improve the behavior of an LLM to be safer, less toxic, more conversational, and better at following instructions.

## Reinforcement Learning with Human Feedback
Typically, after performing SFT, a second stage of fine-tuning occurs which is called reinforcement learning from human feedback. RLHF enables an LLM to better align with human-preferred responses, making its responses more helpful, truthful, and safer.

![[rlhf-procedure.png | twitch]]

To leverage RLHF, a reward model is trained. An RM is usually initialized with a pretrained LLM, often one that is SFT. Then it is tuned on human preference data which is either single sided (with a prompt, response, and a score) or composed of a prompt and a pair of responses along with a preference label indicating which of the two responses is preferred.

Preferences can be in a binary form (good or bad), on the Likert scale (strongly disagree, disagree, neutral, agree, strongly agree), rank order when more than 2 candidates are evaluated, or a more detailed assessment of the summary quality.

The preference signal can also incorporate other dimensions such as safety, helpfulness, fairness, and truthfulness. Using this ranked data, the RM is fine-tuned to predict the reward associated with each LLM output.

Once a reward model is initialized and fine-tuned on preference pairs, it is then used by a reinforcement learning policy gradient algorithm, which further fine-tunes a previously instruction-tuned LLM to generate responses that are better aligned with human preferences.

To better scale RLHF, reinforcement learning from AI feedback (RLAIF) can be used, which leverages AI feedback instead of human feedback to generate preference labels. It is also possible to remove the need for RLHF by using approaches such as direct preference optimization.

## Parameter Efficient Fine-Tuning
Both SFT and RLHF are still very costly in terms of compute time and accelerator resources. Luckily, parameter efficient fine-tuning (PEFT) can be used to make fine-tuning significantly cheaper and faster compared to pre-training and full fine-tuning.

At a high level, PEFT approaches append a significantly smaller set of weights (on the order of thousands of parameters) that are used to perturb the pretrained LLM weights. The perturbation has the effect of fine-tuning the LLM to perform a new set of tasks. This has the benefit of training a significantly smaller set of weights, compared to traditional fine-tuning of the entire model.

Some common PEFT techniques include:
- **Adapter-based fine-tuning**: which employs small modules, called adapters, to the pretrained model. Only the adapter parameters are trained.
- **Low rank adaptation (LoRA)**: which uses two smaller matrices to approximate the original weight matrix update instead of fine-tuning the whole LLM. This technique freezes the original weights and trains these update matrices.
- **Soft prompting**: which is a technique for conditioning frozen LLMs with learnable vectors instead of hand crafted text prompts. These vectors, called soft prompts, are optimized on the training data and can be as few as five tokens.

For most tasks, full fine-tuning is still the most performant, followed by LoRA and soft prompting, but the order is reversed when it comes to cost.
