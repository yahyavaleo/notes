Prompt engineering is the process of designing and refining the text inputs (prompts) that you feed into an LLM to achieve desired and relevant outputs. This might include grounding the model to yield factual responses or unleashing the creativity of the model to tell a story.

Prompt engineering can include providing clear instructions to the LLM, giving examples, using keywords, and formatting to emphasize important information, and providing additional background details.

There are several types of prompting techniques:
- **Zero-shot prompting**: In which you provide the LLM with a prompt that includes just the instructions or the task description. The LLM relies heavily on its existing knowledge to output the correct response. This requires no additional data or examples.
- **Few-shot prompting**: In which you provide the LLM with a prompt that includes a task description, as well as a few (three to five) carefully chosen examples, that will help guide the LLM's response. Few-shot prompting is usually more reliable than zero-shot prompting.
- **Chain-of-though prompting**: In which you provide the LLM with a prompt that demonstrates how to solve similar problems using step-by-step reasoning. The LLM generates its own chain-of-thought for the new problem, breaking it down into smaller steps and explaining its reasoning. Finally, it provides an answer based on its reasoning process.
